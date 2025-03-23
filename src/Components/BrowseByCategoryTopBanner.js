import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BrowseByCategoryTopBanner = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/Vendor/vendors`, {
          credentials: "include",
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`,
          }
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const res = await response.json();
        console.log("response is: ",res)
          const result = res?.Data?.filter(item => item.VendorCategory === "Lifestyle") || [];
       const lifestyleVendors = result.filter((item) => item.Paid === "true").filter(Boolean);
      
        // const lifestyleVendors = result.Data.filter((item) => item.Paid === true).filter((item)=>item.VendorCategory==="LifeStyle");
        console.log("lifestyle vendors are: ",lifestyleVendors)
        setData(lifestyleVendors);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <>
      <div className="container-fluid browse-category-item">
        <div className="row">
          <div className="col-xl-12 col-xxl-12 col-lg-12 col-md-12 col-12 browse-category-item-right h-auto md:h-[47vh] bg-white">
            <h1 className="browse-category-title text-[1.5rem] text-center mt-4 text-black">Featured Lifestyle Benefits</h1>
            <p className="font-bold text-black text-center mb-4">Exclusive perks for extraordinary experiences</p>

            <div className="browse-category-video !h-auto ml-2">
              <Slider {...settings}>
                {data.map((datab, index) => (
                <Link key={`${datab.VendorName}-${index}`} to="/ServiceInfo" state={{datab}} >
                    <div className="relative rounded-lg overflow-hidden mr-[0.9rem]">
                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-black opacity-35"></div>

                      {/* Vendor Image */}
                      <img
                        className="w-full h-[250px] object-cover"
                        src={datab.VendorImages}
                        alt={datab.VendorName}
                      />

                      {/* Vendor Name & Description */}
                      <div className="absolute bottom-4 left-4 text-white">
                        <h2 className="text-lg font-bold">{datab.VendorName}</h2>
                        <p className="text-sm line-clamp-2">{datab.VendorDescription}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrowseByCategoryTopBanner;
