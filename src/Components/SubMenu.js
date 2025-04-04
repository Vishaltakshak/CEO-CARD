import React from "react";
import { useLocation } from "react-router-dom";
import SubmenuBanner from "./SubmenuBanner";
import AboutSubMenu from "./AboutSubMenu";
import SubcategorySlider from "./SubcategorySlider";
import ShareExperience from "./ShareExperience";
import SubmenuMap from "./SubmenuMap";
import SubmenuBenefits from "./SubmenuBenefits";
import ScrollTotop from "./ScrollTotop";
import AfterLoginLayout from "./layouts/AfterLoginLayout";
import NavService from "./NavService";

const SubMenu = () => {
  const location = useLocation();
  const service = location.state?.service || {};
  console.log("in submenu page service", service);

  return (
    <AfterLoginLayout>
      <SubmenuBanner service={service} />
      <AboutSubMenu service={service} />
      <SubcategorySlider service={service} />
      <NavService service={service}/>
      {/* <ShareExperience service={service} /> */}
      <SubmenuMap service={service} />
      {/* <SubmenuBenefits service={service} /> */}
      <ScrollTotop service={service} />
    </AfterLoginLayout>
  );
};

export default SubMenu;
