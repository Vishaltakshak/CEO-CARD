import React from "react";
import MembershipImage from "./MembershipImage";
import HomeButton from "./HomeButton";
import { Link } from "react-router-dom";
//import MembershipDetails from "./MembershipDetails";
// import "../css/home.css";

const Image = "././assets/img/female-tour.png";
const Image2 = "././assets/img/Home/luxuryHotel.jpg";
const Image3 = "././assets/img/Home/businessSolutions.jpg";
const MembershipVipTravel = () => {
  return (
    // <>
    //   <div
    //     id="one"
    //     className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 membership-block bg-white"
    //   >
    //     <div className="row align-items-center justify-content-center bg-D9D9D9 border-radius">
    //       {/* <MembershipDetails></MembershipDetails> */}
    //       <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 membership-detail-child order-xxl-1 order-lg-1 order-md-2 order-sm-2 order-2">
    //         <h1 className="membership-title">VIP Travel Privileges</h1>
    //         <p className="membership-para">
    //           CEO Card partners with leading airlines, loyalty programs, car
    //           rental companies and innovative travel brands to provide Members
    //           with:
    //         </p>
    //         <ul className="membership-list">
    //           <li>Seamless priority check-in</li>
    //           <li>Unmatched travel savings</li>
    //           <li>Global travel adventures</li>
    //           <li>Complimentary travel membership</li>
    //           <li>Enhanced travel value</li>
    //           <li>Premium customer service</li>
    //           <li>Elite status elevation</li>
    //         </ul>
    //         <p className="membership-para">
    //           <strong>Partners include:</strong> United Airlines, Virgin
    //           Atlantic, Singapore Airlines, Avis and more...
    //         </p>
    //         <HomeButton buttontext={"preview membership"}></HomeButton>
    //       </div>
    //       <MembershipImage membershipimg={Image}></MembershipImage>
    //     </div>
    //   </div>
    // </>
    <div
      className=" bg-gradient-to-r from-[#F8F8F8] from-20% via-[#FEFEFE] via-[50%] to-[#D9D9D9] to-100% p-8 pt-[10rem]"
      id="one"
    >
      {/* Grid container: 2 sections in one line, last section below */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* First Section: VIP Travel Privileges */}
        <div className="bg-[#546166] p-6 rounded-lg flex items-center justify-center shadow-xl relative">
          {/* Text content on the right */}
          <div className="lg:w-2/3  text-center lg:text-left text-white flex flex-col justify-start z-[10]">
            <h1 className="text-3xl font-bold text-white text-center">
			Business Travel Benefits
            </h1>
            <p className="text-lg mb-4 text-center">
			Business travel should be seamless and stress-free. CEOCard offers exclusive travel perks to ensure your trips are comfortable and cost-effective.
            </p>

            {/* Points in two columns */}
            <ul className="grid gap-2.5 list-disc mb-4 text-lg text-left">
              <li className="text-white">- Flight & Hotel Discounts: Get exclusive discounts on business class flights and premium hotel bookings worldwide</li>
              <li className="text-white">Car Rentals & Chauffeur Services: Enjoy exclusive rates on car rentals or chauffeur-driven services to ensure a smooth and efficient travel experience.</li>
              <li className="text-white">	
				Running a startup requires hard work, but it’s also important to relax and recharge. 	CEOCard offers exclusive lifestyle benefits that help you unwind in style.
			</li>
              <li className="text-white">- Concierge Services: Enjoy personalized concierge services to assist with travel arrangements, event planning, and lifestyle management.</li>
              <li className="text-white">- VIP Access: Get VIP access to premium restaurants, spas, and entertainment venues, ensuring your work-life balance is never compromised.

</li>
             
            </ul>
            <p className="text-lg mb-4 text-left">
              <strong>Partners include:</strong> United Airlines, Virgin
              Atlantic, Singapore Airlines, Avis and more...
            </p>
            {/* <HomeButton buttontext="preview membership" /> */}
            <Link to="/enquiry" className="btn btn-custombutton">
              <button>Preview Membership</button>
            </Link>
          </div>

          {/* Image on the left */}
          <div className="w-full h-full absolute top-0 left-0">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-75 rounded-lg"></div>
            <img
              src={Image}
              alt="VIP Travel Privileges"
              className="w-full h-full rounded-lg object-cover object-center"
            />
          </div>
        </div>

        {/* Second Section: CEO Hotel Program */}
        <div className="bg-[#546166] p-6 rounded-lg flex items-center justify-center shadow-xl relative">
          {/* Text content on the right */}
          <div className="lg:w-2/3 p-4 text-center lg:text-left text-white flex flex-col justify-start z-[10]">
            <h1 className="text-3xl font-bold text-white text-center">
			Membership Benefits
            </h1>

		
			<p className="text-lg mb-4 text-center">
			Business travel should be seamless and stress-free. CEOCard offers exclusive travel perks to ensure your trips are comfortable and cost-effective.
            </p>
          

            {/* Points in two columns */}
            <ul className="grid  gap-2.5 list-disc mb-4 text-lg text-left">
              <li className="text-white">Peer-to-Peer Connections: Engage with fellow CEOs and founders across a wide range of industries, share experiences, and collaborate on projects</li>
              <li className="text-white">Peer-to-Peer Connections: Engage with fellow CEOs and founders across a wide range of industries, share experiences, and collaborate on projects</li>
              <li className="text-white">
			  Access exclusive funding opportunities through our network of investors and venture capitalists. CEOCard connects you with potential investors who are actively looking for promising startups to support.
              </li>
             
             
            </ul>

            <p className="text-lg mb-4">
              <strong>Partners include:</strong> Park Hyatt, W Hotels, Rosewood,
              The Peninsula, Oberoi Hotels and more...
            </p>
            <Link to="/enquiry" className="btn btn-custombutton">
              <button>Preview Membership</button>
            </Link>
          </div>
          {/* Image on the left */}
          <div className="w-full h-full absolute top-0 left-0">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-75 rounded-lg"></div>
            <img
              src={Image2}
              alt="VIP Travel Privileges"
              className="w-full h-full rounded-lg object-cover object-center"
            />
          </div>
        </div>
      </div>









	  <div className=" bg-gradient-to-r from-[#F8F8F8] from-20% via-[#FEFEFE] via-[50%] to-[#D9D9D9] to-100% p-8 pt-[10rem]">
	  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* First Section: VIP Travel Privileges */}
        <div className="bg-[#546166] p-6 rounded-lg flex items-center justify-center shadow-xl relative">
          {/* Text content on the right */}
          <div className="lg:w-2/3  text-center lg:text-left text-white flex flex-col justify-start z-[10]">
            <h1 className="text-3xl font-bold text-white text-center">
			Exclusive Events & Masterclasses
            </h1>
            <p className="text-lg mb-4 text-center">
			CEOCard is your gateway to knowledge and inspiration. Attend exclusive events, workshops, and masterclasses with thought leaders, industry experts, and successful entrepreneurs. Learn about emerging trends, strategies for growth, and valuable insights to help you lead more effectively.
            </p>

            {/* Points in two columns */}
            <ul className="grid gap-2.5 list-disc mb-4 text-lg text-left">
              <li className="text-white">- Founder Masterclasses: Attend sessions hosted by successful startup founders who share real-world strategies for growing a business.</li>
              <li className="text-white">Industry Webinars: Participate in webinars on various topics, from marketing strategies to funding and legal matters</li>
              <li className="text-white">	
			  Networking Events: Join exclusive networking sessions where you can meet potential partners, investors, and collaborators.
			</li>
              
             
            </ul>
            <p className="text-lg mb-4 text-left">
              <strong>Partners include:</strong> United Airlines, Virgin
              Atlantic, Singapore Airlines, Avis and more...
            </p>
            {/* <HomeButton buttontext="preview membership" /> */}
            <Link to="/enquiry" className="btn btn-custombutton">
              <button>Preview Membership</button>
            </Link>
          </div>

          {/* Image on the left */}
          <div className="w-full h-full absolute top-0 left-0">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-75 rounded-lg"></div>
            <img
              src={Image3}
              alt="VIP Travel Privileges"
              className="w-full h-full rounded-lg object-cover object-center"
            />
          </div>
        </div>

        {/* Second Section: CEO Hotel Program */}
        <div className="bg-[#546166] p-6 rounded-lg flex items-center justify-center shadow-xl relative">
          {/* Text content on the right */}
          <div className="lg:w-2/3  text-center lg:text-left text-white flex flex-col justify-start z-[10]">
            <h1 className="text-3xl font-bold text-white text-center mb-auto">
			Corporate Services & Tools
            </h1>

		
			<p className="text-lg mb-4 text-center">
			CEOCard’s members enjoy exclusive rates on essential services that can accelerate startup growth. From legal and accounting services to business management tools, our partnerships with top providers ensure you get the best resources at a fraction of the cost.
            </p>
          

            {/* Points in two columns */}
            <ul className="grid  gap-2.5 list-disc mb-4 text-lg text-left">
              <li className="text-white">Legal Services: Access trusted legal counsel to help with contracts, intellectual property, and more</li>
              <li className="text-white">- Accounting & Tax Solutions: Get professional accounting services to ensure your financials are in order.</li>
              <li className="text-white">
			  Productivity Tools: Gain access to premium productivity tools at discounted prices to streamline operations and enhance team collaboration </li>
             
             
            </ul>

            <p className="text-lg mb-4">
              <strong>Partners include:</strong> Park Hyatt, W Hotels, Rosewood,
              The Peninsula, Oberoi Hotels and more...
            </p>
            <Link to="/enquiry" className="btn btn-custombutton">
              <button>Preview Membership</button>
            </Link>
          </div>
          {/* Image on the left */}
          <div className="w-full h-full absolute top-0 left-0">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-75 rounded-lg"></div>
            <img
              src={Image2}
              alt="VIP Travel Privileges"
              className="w-full h-full rounded-lg object-cover object-center"
            />
          </div>
        </div>
      </div>
	  </div>




   
      
    </div>
  );
};

export default MembershipVipTravel;