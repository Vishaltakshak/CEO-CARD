import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
//import Layout from "./Layout";
//import Login from "./Common/Login";
// import Signup from "./Common/Signup";
import Aboutus from "./Common/About_us";
import SignupNew from "./Common/SignupNew";

import HomeAfterLogin from "./Components/HomeAfterLogin";
import LoginPage from "./Common/LoginPage";
import ForgotPasswordPage from "./Common/ForgotPasswordPage";
import Privacy from "./Components/footer_pages/Privacy";
import Partnership from "./Components/footer_pages/Partnership";
import ContactUs from "./Components/footer_pages/ContactUs";
import Careers from "./Components/footer_pages/Careers";
import SubMenu from "./Components/SubMenu";
import SearchLocation from "./Components/SearchLocation";
import AllBenifits from "./Components/pages/AllBenifits";
import Community from "./Components/pages/Community";
import Search from "./Components/pages/Search";
import Notifications from "./Components/pages/Notifications";

import BrowseByCategory from "./Components/BrowseByCategory";
import Faq from "./Components/footer_pages/Faq";
import TermsOfServices from "./Components/footer_pages/TermsOfServices";
import Rewards from "./Components/pages/Rewards";
import TeamMembership from "./Components/pages/TeamMembership";
import SpouseMembership from "./Components/pages/SpouseMembership";
import OrderMembershipCard from "./Components/pages/OrderMembershipCard";
import Enquiry from "./Components/pages/Enquiry";
import MembershipFormSubmitted from "./Components/pages/MembershipFormSubmitted";
import ConciergeRequest from "./Components/footer_pages/ConciergeRequest";
import RedemptionAssistance from "./Components/RedemptionAssistance";
import BrowseHotels from "./Components/BrowseHotels";
import BrowseHotelsByBrands from "./Components/BrowseHotelsByBrands";
import AllPageScrollToTop from "./Components/AllPageScrollTotop";
import Reactivate from "./Components/pages/reactivate";
import RejoinHome from "./Components/RejoinHome";
import { ExploreElite } from "./Components/pages/ExploreElite.js";
import { Referreal } from "./Components/pages/Referreal.js";
import { ProfilePage } from "./Components/pages/userprofile/ProfilePage.js";
import { UserProvider } from "./UserContext.js";
import TravelPage from "./Components/TravelPage.jsx";
import BusinessPage from "./Components/Business.jsx";
import Payment from "./Components/Payment.jsx";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Bootstrap JS
import ServiceInfo from "./Components/ServiceInfo.jsx";
import TravelInfo from "./Components/TravelInfo.jsx";
import HotelInfo from "./Components/HotelInfo.jsx";
import BusinessInfo from "./Components/BusinessInfo.jsx";
import LifestyleInfoPage from "./Components/LifeStyleInfoPage.jsx";

const App = () => {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  return (
    <>
      <div className="App" style={{overflow:"hidden"}}>
      <UserProvider>
        <BrowserRouter>
          <AllPageScrollToTop>
            <Routes>
              <Route path="/business" element={<BusinessPage/>}/>
              <Route path="/" element={<Home />} />
              <Route path="/signupnew" element={<SignupNew />} />
              <Route path="/about_us" element={<Aboutus />} />
              <Route path="/Payment" element={<Payment />} />
              <Route path="/ServiceInfo" element={<ServiceInfo />} />
              <Route path="/TravelInfo" element={<TravelInfo />} />
              <Route path="/HotelInfo" element={<HotelInfo />} />
              <Route path="/BusinessInfo" element={<BusinessInfo />} />
              {/* Added by SK */}
              <Route path="/LoginPage" element={<LoginPage />} />
              <Route
                path="/ForgotPasswordPage"
                element={<ForgotPasswordPage />}
              />
              <Route path="/Privacy" element={<Privacy />} />
              <Route path="/Partnership" element={<Partnership />} />
              <Route path="/ContactUs" element={<ContactUs />} />
              <Route path="/Careers" element={<Careers />} />
              <Route path="/Enquiry" element={<Enquiry />} />
              <Route
                path="/MembershipFormSubmitted"
                element={<MembershipFormSubmitted />}
              />
              <Route path='/LifeStyleInfoPage' element={<LifestyleInfoPage/>} />
              <Route path='/refferal' element={<Referreal/>} />
              <Route path="/exploreelite" element={<ExploreElite/>} />
              <Route path="/SubMenu" element={<SubMenu />} />
              <Route path="/homeafterlogin" element={<HomeAfterLogin />} />
              <Route path="/allbenifits" element={<AllBenifits />} />
              <Route path="/SearchLocation" element={<SearchLocation />} />
              <Route path="/BrowseByCategory" element={<BrowseByCategory />} />
              <Route path="/Community" element={<Community />} />
              <Route path="/Faq" element={<Faq />} />
              <Route path="/Search" element={<Search />} />
              <Route path="/TermsOfServices" element={<TermsOfServices />} />
              <Route path="/Notifications" element={<Notifications />} />
              <Route path="/Rewards" element={<Rewards />} />
              <Route path="/TeamMembership" element={<TeamMembership />} />
              <Route path="/SpouseMembership" element={<SpouseMembership />} />
              <Route
                path="/OrderMembershipCard"
                element={<OrderMembershipCard />}
              />
              <Route path="/Profile-page" element={<ProfilePage/>}/>
              <Route path="/concierge_request" element={<ConciergeRequest />} />
              <Route
                path="/redemption_assistance"
                element={<RedemptionAssistance />}
              />
              <Route path="/browse_hotels" element={<BrowseHotels />} />
              <Route
                path="/browse_hotels_by_brand"
                element={<BrowseHotelsByBrands />}
              />
              <Route path="/reactivate" element={<Reactivate />} />
              <Route path="/rejoin_home" element={<RejoinHome />} />
              <Route path="/travel" element={<TravelPage/>}/>
            </Routes>
          </AllPageScrollToTop>
        </BrowserRouter>
        </UserProvider>
      </div>
    </>
  );
};

export default App;
