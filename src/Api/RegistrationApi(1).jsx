const RegistrationApi = async (formData) => {
  const url = "https://admin.speedsoftware.site/Api/register";
  let isRegistered = false
    
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.status) (isRegistered = true)
        })
        .catch((error) => {
          console.error('Registration error', error)
        });
    } catch (e) {
      console.log(e);
    }

    return isRegistered
};

export default RegistrationApi;
