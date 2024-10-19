import axios from "axios";
import { useState } from "react";

const GetAllMenu = async () => {
  const[menu, setMenu]=useState([
    {
    SubCategoryName:'',
    MainCategory:'',
    SubCategoryTitle:''


  }]);

  // const url = "https://admin.speedsoftware.site/Api/getAllMenuData";
  // await fetch(url)
  //   .then((res) => res.json())
  //   .then((response) => (menu = response.data));
  // console.log("api res", menu);
  // return menu;

  const url = "https://ceo-card-back-end-72bl.vercel.app/api/Nav/hover/view"
  const response = await axios.get(url);
  const data=response.data.Data;
  const storedData= data.map((item)=>({
    MainCategory:item.MainCategory,
    SubCategoryName: item.SubCategoryName,
    SubCategoryTitle: item.SubCategoryTitle

  }))
  setMenu(storedData)
  console.log("menu", menu)



  // setMenu(data.map((item)=>{
  //   MainCategory=item.MainCategory,
  //   SubCategoryName=item.SubCategoryName

  // }))
  
  console.log(menu)
  return menu
};

export default GetAllMenu;
