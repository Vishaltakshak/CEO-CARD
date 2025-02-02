import React, { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../../UserContext';
import axios from 'axios';

export const ProfilePage2 = () => {
  const { userId } = useContext(UserContext);

  const [formData, setFormData] = useState({
    Currency: '',
    Language: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://ceo-card-back-end-1wob.vercel.app/api/user/view/${userId}`);
        const data = response.data.Users;

        setFormData({
          Name: data.Name || '',
          Currency: data.Currency || '',
          Language: data.Language || ''
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., update user settings)
    console.log("Submitted Form Data:", formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="bg-white text-black flex flex-col justify-center items-center">
      <div className="page2-heading">
        <h1>Preferences</h1>
        <h6>Change your language, currency, and accessibility requirements.</h6>
      </div>
      <hr />
      <div className="profilepage2-form-con">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-between" style={{ margin: '10px', padding: '10px' }}>
              <label className='mt-[5px]' htmlFor="Currency">Currency:</label>
              <input
                name="Currency"
                style={{ border: "none", backgroundColor: 'white', color: 'white', marginLeft: '10px' }}
                type="text"
                placeholder="Select Your Currency"
                value={formData.Currency}
                onChange={handleInputChange}
                className='px-2 py-2'
              />
            </div>
            <hr />
            <div className="flex" style={{ margin: '10px', padding: '10px' }}>
              <label className='mt-[7px]' htmlFor="Language">Language:</label>
              <input
                name="Language"
                style={{ border: "none", backgroundColor: 'white', color: 'white', marginLeft: '10px' }}
                type="text"
                placeholder="Select your language"
                value={formData.Language}
                onChange={handleInputChange}
                className='py-2 px-2'
              />
            </div>
          </div>
          <button
            type="submit"
            style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px' }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};




// import React from 'react'
// import { useEffect } from 'react'
// import { useContext } from 'react'
// import { UserContext } from '../../../UserContext'
// import axios from 'axios'
// import { useState } from 'react'
// export const ProfilePage2 = () => {
//     const{userId}=useContext(UserContext)

//     const [FormData, setFormData]=useState({
//         Currency:'',
//         Language:''
//       })

//       useEffect(() => {
//         const fetchdata = async () => {
//             try {
//                 const response = await axios.get(`https://ceo-card-back-end-1wob.vercel.app/api/user/view/${userId}`);
//                 const data =  response.data.Users;
//                 console.log(response)
             

//                 setFormData(prevState => ({
//                     ...prevState,
//                     Name: data.Name || '',
//                    Currency:data.langauge,
//                     Language:data.Currency
//                   }))
//             } catch (error) {
//                 console.error('Error fetching user data:', error);
//             }
//         };

//         if (userId) {
//             fetchdata();
//         }
//     }, [userId]);
    
    
    
//     const handleSubmit =(e)=>{
//         console.log("hi")
//     }

//   return (
//     <div className='container-fluid flex flex-col justify-center items-center'> 
//         <div className="page2-heading">
//             <h1>Prefrences</h1>
//             <h6>Change your language, currency, and accessibility requirements.</h6>
//         </div>
//         <hr />
//         <div className="profilepage2-form-con">
//             <form onSubmit={handleSubmit} action="">
//                 <div className="flex flex-col justify-center items-center">
//                     <div className="flex justify-between " style={{margin:'10px', padding:'10px'}} >
//                         <label htmlFor="Currency">Currency:</label>
//                         <input style={{border: "none", backgroundColor:'black', color:'white', marginLeft:'10px'}} type="text" placeholder='Select Your Currency' />
//                      </div>
//                      <hr />
//                      <div className="flex " style={{margin:'10px', padding:'10px'}}>
//                         <label htmlFor="Langauge">Language:</label>
//                         <input style={{border: "none", backgroundColor:'black', color:'white', marginLeft:'10px'}} type="text" placeholder='Select your language' />
//                      </div>
                     
//                 </div>
                
//             </form>
            
//         </div>
//         <button type="submit" style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px' }}>
//                    Submit
//                 </button>
//     </div>
//   )
// }
