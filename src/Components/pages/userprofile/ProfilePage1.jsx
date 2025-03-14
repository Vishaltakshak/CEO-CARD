import React, { useContext, useEffect, useState } from 'react';
import '../../../css/ProfileSection/ProfilePage1.css';
import axios from 'axios';
import { UserContext } from '../../../UserContext';

export const ProfilePage1 = () => {
    const [Name, setName] = useState('');
    const [Mail, setMail] = useState('');
    const [MobileNumber, setMobileNumber] = useState('');
    const [Role, setRole] = useState('');
    const [Status, setStatus] = useState('');
    const{userId}=useContext(UserContext)
    console.log("user id is",userId)
    const [FormData, setFormData]=useState({
        Name: '',
        Mail: '',
        Password: '',
        ConfirmPassword: '',
        MobileNumber: '',
      
        DOB: '',
        LinkedinProfile: '',
        CompanyName: '',
        ProfessionalTitle: '',
        
        UserType: 'Regular User',
        UserImage: null,
      })

    const HandlePersonalSubmit = (e) => {
        e.preventDefault();
        
        const formPayload = new FormData();
    
    Object.keys(FormData).forEach(key => {
      if (FormData[key] !== null) {
        formPayload.append(key, FormData[key]);
      }
    });
    try {
        if (userId) {
            const token = localStorage.getItem("toekn");
            const updatedUser= axios.put(`${process.env.REACT_APP_BACKEND_URL}/user/view/${userId}`,{ withCredentials: true,
          headers: {
        "Authorization": `Bearer ${token}` // Add token in the Authorization header
    }
             })
          console.log('User data updated successfully', updatedUser);
        } 
      } catch (error) {
        console.error('Error submitting data:', error);
      }
        
        console.log({ Name, Mail, MobileNumber, Role, Status });
        // Add your update logic here
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
      };
    

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/${userId}`,{ withCredentials: true,
                     headers: {
        "Authorization": `Bearer ${token}` // Add token in the Authorization header
    }
                 });
                const data =  response.data.Users;
                console.log(response)
             

                setFormData(prevState => ({
                    ...prevState,
                    Name: data.Name || '',
                    Mail: data.Mail || '',
                    MobileNumber: data.MobileNumber || '',
                    Role: data.Role || 'User',
                    DOB: data.DOB || '',
                    LinkedinProfile: data.LinkedinProfile || '',
                    CompanyName: data.CompanyName || '',
                    ProfessionalTitle: data.ProfessionalTitle || '',
                    Status: data.Status || 'Active',
                    UserType: data.UserType || 'Regular User',
                  }))
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        if (userId) {
            fetchdata();
        }
    }, [userId]);

    return (
        <div className='container-fluid bg-white text-black flex flex-col justify-center'>
            <div className='ps-0'>
                <div className='personal-details-heading flex justify-between'>
                    <h1 className='text-black'>Personal Details</h1>
                   
                </div>
                <hr />
                <div className="personal-details-form flex flex-col justify-center items-center mt-3">
                    <form onSubmit={HandlePersonalSubmit}>
                        {/* Label and Input pairs */}
                        {[
                            { label: 'Name', value: FormData.Name, onChange: handleChange },
                            { label: 'Email Address', value: FormData.Mail, onChange: {handleChange} },
                            { label: 'Phone Number', value: FormData.MobileNumber, onChange: {handleChange} },
                            {label:'Company Name', value:FormData.CompanyName, onchange:{handleChange}},
                            {label:'LinkedIn Profile', value:FormData.LinkedinProfile, onchange:{handleChange}}
                           
                            
                        ].map((field) => (
                            <div key={field.label} style={{ display: 'flex', flexDirection: 'row', marginBottom: '15px', justifyContent:"space-between", color:"black" }}>
                                <label htmlFor={field.label} style={{ padding: '10px' }}>{field.label}:</label>
                                <input
                                    className='bg-gray-100 text-black personal-details-form-input'
                                    type={field.label === 'Phone Number' ? 'number' : 'text'}
                                    id={field.label}
                                    placeholder={`Enter ${field.label}`}
                                    value={field.value}
                                    onChange={(e) => field.onChange(e.target.value)}
                                    style={{ border: 'none', padding: '10px', color:"#757575"}}
                                />
                            </div>
                        ))}
                         <div className='flex flex-row justify-between'>
                            <label htmlFor="DOB" className="block text-sm font-medium text-black mb-1">Date of Birth</label>
                            <div className=" bg-gray-100">
                              <input
                                type="date"
                                id="DOB"
                                name="DOB"
                                value={FormData.DOB}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-gray-100 text-black border border-gray-300 rounded-md focus:outline-none  focus:ring-2 focus:ring-blue-500"
                               
                              />
                            </div>
                        </div>
                        <button type="submit" style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px' }}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};