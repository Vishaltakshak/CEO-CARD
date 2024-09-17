const GetAllMenu = async () => {
  let menu;
  const url = "https://admin.speedsoftware.site/Api/getAllMenuData";
  await fetch(url)
    .then((res) => res.json())
    .then((response) => (menu = response.data));
  console.log("api res", menu);
  return menu;
};

export default GetAllMenu;
