import React, { useState, useEffect } from "react";
import AfterLoginLayout from "./layouts/AfterLoginLayout";
import ScrollTotop from "./ScrollTotop";
import TravelResults from "./BrowseByTravel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/memberbenefits.css";

const TravelPage = () => {
  const [premiumData, setPremiumData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const fetchPremium = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/Vendor/vendors`, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error("Failed to fetch data");

        const result = await response.json();
        const TravelData = result.Data.filter((item) => item.VendorCategory === "Travel");
        const PremiumData = TravelData.filter((item) => item.Paid === "true");
        setPremiumData(PremiumData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPremium();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: !isHovered,
    autoplaySpeed: 2000,
    centerPadding:"40px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <AfterLoginLayout>
      <ScrollTotop />
      <div className="w-full bg-white px-6 !overflow-hidden">
        <h1 className="text-center text-[20px] font-bold py-4">PREMIUM TRAVEL BENEFITS</h1>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <Slider
            {...settings}
            className="travel-slider"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {premiumData.map((item, index) => (
              <div key={index} className="p-2">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img
                    src={item.VendorImages}
                    alt={item.ContentTitle}
                    className="w-full h-[200px] object-cover"
                  />
                  <div className="p-3">
                    <h5 className="text-black font-bold text-lg">{item.VendorName}</h5>
                    <p className="text-black text-sm line-clamp-2">{item.VendorDescription}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>

      {/* Travel Results Section */}
      <TravelResults />
      <ScrollTotop />
    </AfterLoginLayout>
  );
};

export default TravelPage;
