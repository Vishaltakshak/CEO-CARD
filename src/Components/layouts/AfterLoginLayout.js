import { useEffect, useState } from "react"
import AfterLoginFooter from "../../Common/AfterLoginFooter"
import AfterLoginHeader from "../../Common/AfterLoginHeader"
import useMenuData from "../../Api/GetAllMenu"
import { useNavigate } from "react-router"

const AfterLoginLayout = ({children}) => {
    const navigate = useNavigate()
    // const [menu, setMenu] = useState([])
    const isLoggedIn = sessionStorage.getItem('isLoggedIn')
    const menu = useMenuData();
    
    // if(isLoggedIn === null) {
    //     navigate("/")
    //     return null
    // } 


    return(
        <>
            <AfterLoginHeader allMenu={menu} />
                {children}
            <AfterLoginFooter />
        </>
    )
}

export default AfterLoginLayout


// import { useEffect } from "react";
// import AfterLoginFooter from "../../Common/AfterLoginFooter";
// import AfterLoginHeader from "../../Common/AfterLoginHeader";
// import useMenuData from "../../Api/GetAllMenu";
// import { useNavigate } from "react-router";

// const AfterLoginLayout = ({ children }) => {
//   const navigate = useNavigate();
//   const menu = useMenuData(); // Use the custom hook to fetch menu data
//   const isLoggedIn = sessionStorage.getItem("isLoggedIn");

//   useEffect(() => {
//     if (isLoggedIn === null) {
//       navigate("/"); // Redirect if not logged in
//     }
//   }, [isLoggedIn, navigate]);

 
// };

// export default AfterLoginLayout;
