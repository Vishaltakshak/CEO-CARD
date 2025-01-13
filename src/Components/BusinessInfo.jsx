import React from "react";
import { useLocation } from "react-router-dom";
// import SubmenuBanner from "./SubmenuBanner";
import AboutSubMenu from "./AboutSubMenu";
import SubcategorySlider from "./SubcategorySlider";
import ShareExperience from "./ShareExperience";
import SubmenuMap from "./SubmenuMap";
import SubmenuBenefits from "./SubmenuBenefits";
import ScrollTotop from "./ScrollTotop";
import AfterLoginLayout from "./layouts/AfterLoginLayout";
import ServiceInfoBanner from "./ServiceInfoBanner";
import VendorDescription from "./ShareExperience";

const BusinessInfo = () => {
  const location = useLocation();
  const service = location.state?.item || {};
  console.log("in submenu page service", service);

  return (
    <AfterLoginLayout>
      <ServiceInfoBanner service={service} />
      {/* <AboutSubMenu service={service} /> */}
      <SubcategorySlider service={service} />
      <VendorDescription service={service} />
      <SubmenuMap service={service} />
      {/* <SubmenuBenefits service={service} /> */}
      <ScrollTotop service={service} />
    </AfterLoginLayout>
  );
};

export default BusinessInfo;
