import React, { useState, useEffect } from "react";
import AfterLoginLayout from "./layouts/AfterLoginLayout";
import ScrollTotop from "./ScrollTotop";
import TravelResults from "./BrowseByTravel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/memberbenefits.css";
import { Link } from "react-router-dom";
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
        const PremiumData = TravelData.filter((item) => item.Paid === "true").filter(Boolean);
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
    slidesToShow: 2,
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
    
          <div className="container-fluid browse-category-item">
          <div className="row">
            <div className="col-xl-12 col-xxl-12 col-lg-12 col-md-12 col-12 browse-category-item-right h-auto md:h-[47vh] bg-white">
              <h1 className="browse-category-title text-[1.5rem] text-center mt-4 text-black">
                Premium Travel Benefits
              </h1>
              

              {loading ? (
                <p className="text-center text-black">Loading...</p>
              ) : (
                <div className="browse-category-video !h-auto ml-2">
                  <Slider
                    {...settings}
                    className="travel-slider"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {premiumData.map((datab, index) => (
                      <Link key={`${datab.VendorName}-${index}`} to="/ServiceInfo" state={{ datab }}>
                        <div className="relative rounded-lg overflow-hidden mr-[0.9rem] hover:scale-105 transition-transform duration-300">
                          <div className="absolute inset-0 bg-black opacity-35"></div>
                          <img
                            className="w-full h-[250px] object-cover"
                            src={datab.VendorImages}
                            alt={datab.VendorName}
                          />
                          <div className="absolute bottom-4 left-4 text-white">
                            <h2 className="text-lg font-bold">{datab.VendorName}</h2>
                            <p className="text-sm line-clamp-2">{datab.VendorDescription}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </Slider>
                </div>
              )}
            </div>
          </div>
        </div>

      {/* Travel Results Section */}
      <TravelResults />
      <ScrollTotop />
    </AfterLoginLayout>
  );
};

export default TravelPage;
