const LoginApi = async (userData) => {
    const token = localStorage.getItem("token")
    let isLoggedIn = false;
    const url = 'https://admin.speedsoftware.site/Api/login';
    
    await fetch(url, {
        method: "POST",
        headers: {
            'content-type': 'application/json',
             "Authorization": `Bearer ${token}`,

        },
        body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(response => {
        isLoggedIn = response.status
        sessionStorage.setItem('isLoggedIn', isLoggedIn)
        sessionStorage.setItem('userName', response.data.name)
        sessionStorage.setItem('userId', response.data.userId)
    })
    .catch(e => console.error(e))

    return isLoggedIn;
}

export default LoginApi;