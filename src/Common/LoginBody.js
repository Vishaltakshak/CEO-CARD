import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "../css/loginbody.css";
import { UserContext } from "../UserContext";

const LoginBody = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [users, setUsers] = useState([]);
  // const [userId, setUserId] = useState('');
  const { setUserId } = useContext(UserContext);
  const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/user/view`);
        setUsers(response.data.Users || []);
      } catch (error) {
        console.error("Error fetching users:", error);
        toast.error("Failed to fetch user data");
      }
    };

    fetchUsers();
  }, []);

  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    const user = users.find(
      (user) =>
        user.Mail === formData.email &&
        user.Password === formData.password &&
        user.Status === "Active"
    );

    if (user) {
      console.log("Logged in user:", user);
      console.log("User ID:", user._id);
      setUserId(user._id);
      toast.success("Login Successful");
      sessionStorage.setItem("isLoggedIn", "true");
      navigate("/homeafterlogin");
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className=" bg-signin bg-cover bg-bottom bg-no-repeat flex justify-content-center align-item-center">
        <div className=" login-container flex justify-content-center">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-xl-12">
              <h1 className="welcome-text">Welcome!</h1>
              <h2 className="welcome-subtext">
                Sign in to access your Membership.
              </h2>
            </div>
            <div className="col-12 col-xl-12 login-form">
              <form onSubmit={handleLogin}>
                <div className="row">
                  <div className="col-xl-12 col-12 form-group">
                    <input
                      autoFocus
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      onChange={handleFormInput}
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12 col-12 form-group">
                    <input
                      autoComplete="off"
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      onChange={handleFormInput}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <button
                    className="bg-[#6e6b6b] px-12 py-2 text-white mt-[2rem]"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginBody;