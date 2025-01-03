import axios from "axios";
import { useState, useEffect } from "react";

// Custom hook to fetch menu data
const useMenuData = () => {
  const [menu, setMenu] = useState([]);
  const[link, setlink] = useState([]);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const url = "https://ceo-card-back-end-72bl.vercel.app/api/Nav/hover/view";
        const response = await axios.get(url);
        const data = response.data.Data;
        
        const storedData = data.map((item) => ({
          MainCategory: item.MainCategory,
          SubCategoryName: item.SubCategoryName,
          SubCategoryTitle: item.SubCategoryTitle,
        }));
        setMenu(storedData);

        const onHoverLinksUrl = "https://ceo-card-back-end-72bl.vercel.app/api/subnav/link/view";

        try {
          const response = await axios.get(onHoverLinksUrl);
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

  return {menu, link}; // Only return the menu array
};

export default useMenuData;
