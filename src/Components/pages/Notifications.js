import React, { useContext, useEffect, useState } from "react";

import ScrollTotop from "../ScrollTotop";
import AfterLoginLayout from "../layouts/AfterLoginLayout";
import "bootstrap-icons/font/bootstrap-icons.css";
import io from "socket.io-client";
import axios from "axios";
import { UserContext } from "../../UserContext";
const backEnd = process.env.REACT_APP_BACKEND_URL;

const socket = io(backEnd, {
  withCredentials: true,
});

const Notifications = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const userId = localStorage.getItem("userId");
  console.log("userid is",userId)
  useEffect(() => {
    
    const fetchNotifications = async () => {
      try {
        const token = localStorage.getItem("token")
        const response = await axios.get(`${backEnd}/api/notifications/${userId}`, 
          {withCredentials:true,
             headers: {
        "Authorization": `Bearer ${token}` // Add token in the Authorization header
    }
          }
        );
        console.log(response)
        setNotifications(response.data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
    
    const socket = io(backEnd, {
    withCredentials: true,
    query: { userId }  
  });
    socket.on("new_notification", (newNotification) => {
      setNotifications((prevNotifications) => [newNotification, ...prevNotifications]);
    });
    
    return () => {
     socket.disconnect(); ;
    };
  }, [userId]);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const deleteNotification = async (e, id) => {
    e.stopPropagation();
    try {
      const token = localStorage.getItem("token")
      await axios.delete(`/api/notifications/${id}`,{withCredentials:true,
         headers: {
        "Authorization": `Bearer ${token}` // Add token in the Authorization header
    }
      });
      setNotifications(notifications.filter((notification) => notification._id !== id));
    } catch (error) {
      console.error("Error deleting notification:", error);
    }
  };

  const markAsRead = async (e, id) => {
    e.stopPropagation();
    try {
      const token = localStorage.getItem("token")
      await axios.put(`/api/notifications/${id}/mark-as-read`,{withCredentials:true,  headers: {
        "Authorization": `Bearer ${token}` // Add token in the Authorization header
    }});
      setNotifications(notifications.map((notification) =>
        notification._id === id ? { ...notification, isUnread: false } : notification
      ));
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  return (
    <AfterLoginLayout>
      <div className="container-fluid p-0">
        <div className="text-black bg-white py-4">
          <div className="row">
            <div className="col-12">
              <h3 className="mb-4">Inbox</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="card shadow-sm">
                <div className="list-group list-group-flush">
                  {notifications.map((notification) => (
                    <div key={notification._id} className="list-group-item p-0">
                      <div 
                        className={`d-flex align-items-center p-3 cursor-pointer ${notification.isUnread ? 'bg-light' : ''}`}
                        onClick={() => toggleExpand(notification._id)}
                        style={{cursor: 'pointer'}}
                      >
                        <div className="me-3">
                          {notification.isUnread && (
                            <span className="badge rounded-circle bg-primary" style={{width: '10px', height: '10px'}}></span>
                          )}
                        </div>
                        <div className="me-3">
                          <small className="text-muted">{notification.time}</small>
                        </div>
                        <div className="flex-grow-1">
                          <div className="d-flex align-items-center">
                            <h5 className={`mb-1 ${notification.isUnread ? 'fw-bold' : ''}`}>{notification.heading}</h5>
                          </div>
                          <p className="mb-0 text-truncate text-muted" style={{maxWidth: '90%'}}>{notification.message}</p>
                        </div>
                        <div className="ms-3 d-flex">
                          <button 
                            className="btn btn-sm btn-link text-muted" 
                            onClick={(e) => markAsRead(e, notification._id)}
                            title="Mark as read"
                          >
                            <i className="bi bi-envelope-open"></i>
                          </button>
                          <button 
                            className="btn btn-sm btn-link text-muted" 
                            onClick={(e) => deleteNotification(e, notification._id)}
                            title="Delete"
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </div>
                      </div>
                      {expandedId === notification._id && (
                        <div className="p-4 border-top">
                          <div className="mb-3">
                            <span className="badge bg-secondary me-2">{notification.date}</span>
                          </div>
                          <p className="text-black">{notification.type}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollTotop />
    </AfterLoginLayout>
  );
};

export default Notifications;
