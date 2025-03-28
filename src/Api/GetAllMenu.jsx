import axios from "axios";
import { useState, useEffect } from "react";

// Custom hook to fetch menu data
const useMenuData = () => {
  const [menu, setMenu] = useState([]);
  const[link, setlink] = useState([]);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const token = localStorage.getItem("token");
        const url = `${process.env.REACT_APP_BACKEND_URL}/api/Nav/hover/view`;
        const response = await axios.get(url,{withCredentials:true,
          headers: {
        "Authorization": `Bearer ${token}` // Add token in the Authorization header
          }
        },
         
        );
        const data = response.data.Data;
        
        const storedData = data.map((item) => ({
          MainCategory: item.MainCategory,
          SubCategoryName: item.SubCategoryName,
          SubCategoryTitle: item.SubCategoryTitle,
        }));
        setMenu(storedData);

        const onHoverLinksUrl =`${process.env.REACT_APP_BACKEND_URL}/api/subnav/link/view` ;

        try {
          const token = localStorage.getItem("token");
          const response = await axios.get(onHoverLinksUrl, {withCredentials:true,
            headers: {
        "Authorization": `Bearer ${token}` // Add token in the Authorization header
    }
          });
          const links = response.data.Data;
          
          const subCategories = links.map(data=>data);
         
          setlink(subCategories);
        } catch (error) {
          console.error("Error fetching subcategory links:", error);

        }
        



        
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };
    
    fetchMenuData();
  }, []); // Empty dependency array ensures the fetch runs only once on mount

  return {menu, link}; 
};

export default useMenuData;
