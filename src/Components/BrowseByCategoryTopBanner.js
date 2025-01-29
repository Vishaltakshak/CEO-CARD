import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BrowseByCategoryTopBanner = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/Vendor/vendors`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();

        // Filter for Paid vendors & Get first 2 only
        const lifestyleVendors = result.Data.filter((item) => item.Paid === "true").slice(0, 2);

        setData(lifestyleVendors);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      <div className="container-fluid browse-category-item">
        <div className="row">
          <div className="col-xl-12 col-xxl-12 col-lg-12 col-md-12 col-12 browse-category-item-right h-[30vh] md:h-[47vh]">
            <h1 className="browse-category-title text-[1.5rem] text-center mt-4">Featured Lifestyle Benefits</h1>
            <p className="font-bold text-white text-center mb-4">Exclusive perks for extraordinary experiences</p>

            <div className="browse-category-video grid grid-cols-2 gap-4">
              {data.map((vendor, index) => (
                <Link key={index} to="/#" target="_blank">
                  <div className="relative rounded-lg overflow-hidden">
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black opacity-55"></div>

                    {/* Vendor Image */}
                    <img
                      className="w-full h-[250px] object-cover"
                      src={vendor.VendorImages}
                      alt={vendor.VendorName}
                    />

                    {/* Vendor Name & Description */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <h2 className="text-lg font-bold">{vendor.VendorName}</h2>
                      <p className="text-sm line-clamp-2">{vendor.VendorDescription}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrowseByCategoryTopBanner;
