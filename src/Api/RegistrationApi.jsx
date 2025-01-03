import axios from "axios";

const RegistrationApi = async (formData) => {
  const url = "https://ceo-card-back-end-1wob.vercel.app/api/user/add";
  let isRegistered = false
    
    try {
      const response = await axios.post(url, formData)
      if (response.status) {
        console.log("form submitted sucessfully")
        console.log(formData)
        
      } else {
        console.log('error')
        
      }
      
    } catch (error) {
      console.log(error.message)
      
    }
    return isRegistered
};

export default RegistrationApi;
