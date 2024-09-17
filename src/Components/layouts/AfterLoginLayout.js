import { useEffect, useState } from "react"
import AfterLoginFooter from "../../Common/AfterLoginFooter"
import AfterLoginHeader from "../../Common/AfterLoginHeader"
import GetAllMenu from "../../Api/GetAllMenu"
import { useNavigate } from "react-router"

const AfterLoginLayout = ({children}) => {
    const navigate = useNavigate()
    const [menu, setMenu] = useState([])
    const isLoggedIn = sessionStorage.getItem('isLoggedIn')
    useEffect(() => {
        GetAllMenu().then(allMenu => setMenu(allMenu))
    }, [])
    
    if(isLoggedIn === null) {
        navigate("/")
        return null
    } 


    return(
        <>
            <AfterLoginHeader allMenu={menu} />
                {children}
            <AfterLoginFooter />
        </>
    )
}

export default AfterLoginLayout