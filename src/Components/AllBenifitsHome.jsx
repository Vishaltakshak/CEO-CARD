import React, { useState, useEffect, useRef } from "react";
import '../css/memberbenefits.css';
import { Link } from "react-router-dom";

const AllBenifitsHome = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [translateX, setTranslateX] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            setTranslateX(0);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/Vendor/vendors`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result = await response.json();
                // Double the data array to create seamless infinite scroll
                setData([...result.Data, ...result.Data]);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (!isPaused && data.length > 0) {
            const slideSpeed = 1; // pixels per frame
            let animationFrameId;
            
            const animate = () => {
                setTranslateX(prev => {
                    const cardWidth = isMobile ? window.innerWidth / 2 : window.innerWidth / 4;
                    const newTranslate = prev - slideSpeed;
                    
                    // Reset position when reaching halfway through doubled data
                    if (-newTranslate >= (data.length / 2) * cardWidth) {
                        return 0;
                    }
                    return newTranslate;
                });
                
                animationFrameId = requestAnimationFrame(animate);
            };
            
            animationFrameId = requestAnimationFrame(animate);
            
            return () => {
                if (animationFrameId) {
                    cancelAnimationFrame(animationFrameId);
                }
            };
        }
    }, [isPaused, data.length, isMobile]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="min-h-auto pb-8 bg-white text-black !overflow-hidden">
            <h1 className="font-bold text-center text-[2rem]"> ALL BENEFITS</h1>
            <div className="w-full overflow-hidden" ref={containerRef}>
                <div 
                    className="flex transition-none"
                    style={{
                        transform: `translateX(${translateX}px)`,
                    }}
                >
                    {data.map((datab, i) => (
                        <div 
                            key={i}
                            className={`flex-shrink-0 px-2 md:px-4 ${isMobile ? 'w-[65%]' : 'w-1/4'}`}
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            <Link to='/ServiceInfo' state={{datab}}>
                                <div className="benefit-image-wrapper">
                                    <img 
                                        alt={datab.ContentTitle} 
                                        className="w-full object-cover rounded-lg"
                                        style={{
                                            height: isMobile ? '200px' : '185px'
                                        }}
                                        src={datab.VendorImages}
                                    />
                                </div>
                                <div className="mt-3 md:mt-6 mb-4 md:mb-8">
                                    <h5 className="text-black font-bold text-base md:text-lg mb-2 md:mb-4 truncate">
                                        {datab.VendorName}
                                    </h5>
                                    <div className="text-black text-sm md:text-sm line-clamp-2 md:line-clamp-3">
                                        {datab.VendorDescription}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllBenifitsHome;