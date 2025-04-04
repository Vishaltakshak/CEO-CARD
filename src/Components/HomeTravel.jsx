import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/memberbenefits.css';

const HomeTravel = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                 const token = localStorage.getItem("token");
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/Vendor/vendors`,{
                    method:"GET",
                    credentials:"include",
                    headers:{
                        "Content-Type":"application/json",
                         "Authorization": `Bearer ${token}`,
                    }
                });
                if (!response.ok) throw new Error('Failed to fetch data');
                const result = await response.json();
                const Hotels = result.Data.filter(item => item.VendorCategory === 'Travel');
                setData(Hotels);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, 
        slidesToScroll: 1,
        autoplay: !isHovered,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="w-full bg-white px-6"> 
            <h1 className="text-center text-[20px] font-bold py-4">TRAVEL PARTNERS</h1>
            <div className="w-full">
                <Slider {...settings} 
                    className="travel-slider"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {data.map((datab, i) => (
                        <div key={i}>
                            <Link to='/ServiceInfo' state={{ datab }}>
                                <div className="bg-white mx-1">
                                    <img
                                        src={datab.VendorImages}
                                        alt={datab.ContentTitle}
                                        className="w-full h-[200px] object-cover"
                                    />
                                    <div className="pt-2">
                                        <h5 className="text-black font-bold text-lg">{datab.VendorName}</h5>
                                        <p className="text-black text-sm line-clamp-2">{datab.VendorDescription}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default HomeTravel;