import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularBenefits = () => {
    const [vendors, setVendors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchVendors = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/Vendor/vendors`, {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch vendors");
                }

                const res = await response.json();
                setVendors(res?.Data || []);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchVendors();
    }, []);

    const categories = [
        { title: "Travel Benefits", key: "Travel", link: "/travel" },
        { title: "Hotel Benefits", key: "hotels", link: "/browse_hotels" },
        { title: "Lifestyle Benefits", key: "Lifestyle", link: "/BrowseByCategory" },
        { title: "Business Benefits", key: "Business", link: "/business" },
    ];

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
		centerPadding:"0.5rem",
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
        ],
    };

    if (loading) return <p className="text-black">Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="min-h-screen bg-white text-black p-4">
            {categories.map(({ title, key, link }) => {
                const categoryVendors = vendors.filter(v => v.VendorCategory === key);
                if (categoryVendors.length === 0) return null;

                return (
                    <div key={key} className="mb-8">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">{title}</h2>
                            <Link to={link} className="text-blue-500 hover:underline">
                                View All
                            </Link>
                        </div>
                        <Slider {...sliderSettings}>
                            {categoryVendors.map((service) => (
                                <div key={service._id} className="p-2">
                                    <Link to={`/SubMenu`} state={service} className="block bg-white shadow-md rounded-lg overflow-hidden">
                                        <img src={service.VendorImages || "/default.jpg"} alt={service.VendorName} className="w-full h-40 object-cover" />
                                        <div className="p-3">
                                            <h3 className="font-semibold text-lg">{service.VendorName}</h3>
                                            <p className="text-sm text-gray-600">{service.VendorDescription}</p>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </Slider>
                    </div>
                );
            })}
        </div>
    );
};

export default PopularBenefits;
