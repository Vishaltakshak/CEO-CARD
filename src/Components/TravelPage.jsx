import React, { useState, useEffect } from "react";
import AfterLoginLayout from "./layouts/AfterLoginLayout";
import ScrollTotop from "./ScrollTotop";
import TravelResults from "./BrowseByTravel";
import { Link } from "react-router-dom";

const TravelPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPremium = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/Vendor/vendors`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        const TravelData = result.Data.filter((item) => item.VendorCategory === "Travel");
        const PremiumData = TravelData.filter((item) => item.Paid === "true");
        setData(PremiumData);
      } catch (error) {
        console.error("Error in fetch function:", error);
      }
    };
    fetchPremium();
  }, []);

  return (
    <AfterLoginLayout>
      <div className="container-fluid browse-category-item">
        <div className="row">
          <div className="width-height-sett text-center">
            <h1 className="browse-category-title text-[1rem]">Featured Travel Benefits</h1>
            <p className="font-bold text-white">Exclusive perks for unforgettable journeys</p>
          </div>

          <div className="col-xl-12 browse-category-item-right">
            <div className="browse-category-video !h-auto">
              <div className="w-[90%] mx-auto gap-4 grid grid-cols-2">
                {data.map((item, index) => (
                  <div key={index} className="relative rounded-lg overflow-hidden w-full h-64">
                    {/* Image with Fixed Size & Black Overlay */}
                    <div className="relative w-full h-64">
                      <img
                        className="w-full h-full object-cover"
                        src={item.VendorImages}
                        alt={item.VendorName}
                      />
                      <div className="absolute inset-0 bg-black/70"></div>
                    </div>

                    {/* Text Overlay - Positioned Bottom Left */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-bold">{item.VendorName}</h3>
                      <p className="text-sm line-clamp-3 text-white">{item.VendorDescription}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/#" target="_blank"></Link>
            </div>
          </div>
        </div>
      </div>

      <TravelResults />
      <ScrollTotop />
    </AfterLoginLayout>
  );
};

export default TravelPage;
