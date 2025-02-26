import React, { useState, useEffect } from "react";
import '../css/memberbenefits.css';
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const PopularBenefitsList = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [cities, setCities] = useState([]);
    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [filters, setFilters] = useState({
        searchQuery: "",
        priceRange: [0, 3000000],
        city: "",
        brand: ""
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/Vendor/vendors`,{
                    method: "GET",
                    credentials: 'include',
                    headers:{
                        "Content-Type":"application/json"
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result = await response.json();
				
                
                // Extract unique cities and brands
                const cityList = [...new Set(result.Data.map(item => item.City))].filter(Boolean);
				const brandList = [...new Set(
                    result.Data
                        .map(item => item.Brand?.trim()) // Trim whitespace
                        .filter(Boolean) // Remove null, undefined, empty strings
                        .sort() // Sort alphabetically
                )];
                
                setData(result.Data);
                setFilteredData(result.Data);
                setCities(cityList);
                setBrands(brandList);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleFilterChange = (filterName, value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filterName]: value
        }));
    };

    useEffect(() => {
        let filtered = [...data];

        // Search filter
        if (filters.searchQuery) {
            const query = filters.searchQuery.toLowerCase();
            filtered = filtered.filter(item =>
                item.VendorName.toLowerCase().includes(query) ||
                item.VendorDescription.toLowerCase().includes(query)
            );
			console.log("After search filter length:", filtered.length);
        }

        // Price range filter
        const [minPrice, maxPrice] = filters.priceRange;
        filtered = filtered.filter(item => {
            const itemMin = item?.VendorPricingInfo?.PriceRange?.Min || 0;
            const itemMax = item?.VendorPricingInfo?.PriceRange?.Max || Infinity;
            return itemMin >= minPrice && itemMax <= maxPrice;
        });
		console.log("After price range filter length:", filtered.length); // Log after price range

        // City filter
        if (filters.city) {
            filtered = filtered.filter(item => item.City === filters.city);
			
        }

        // Brand filter
		if (filters.brand) {
            filtered = filtered.filter(item => {
                const itemBrand = item.Brand?.trim();
                const filterBrand = filters.brand?.trim();
                const match = itemBrand === filterBrand;
                
                // Log non-matching items that have the brand property for debugging
                
                
                return match;
            });
			
        }

        setFilteredData(filtered);
    }, [filters, data]);

    if (loading) return <p className="text-black">Loading...</p>;
    if (error) return <p>{error}</p>;
	

    return (
        <div className="min-h-screen bg-white text-black flex flex-col md:flex-row">
            {/* Mobile Filters */}
            <div className="block md:hidden p-4 bg-white gap-4">
                <input
                    type="text"
                    placeholder="Search benefits..."
                    className="w-full p-2 bg-gray-100 rounded text-black mb-2"
                    value={filters.searchQuery}
                    onChange={(e) => handleFilterChange("searchQuery", e.target.value)}
                />
                <div className="relative">
                    <select
                        className="w-full p-2 bg-gray-100 rounded text-black appearance-none"
                        value={filters.city}
                        onChange={(e) => handleFilterChange("city", e.target.value)}
                        style={{ direction: 'ltr' }}
                    >
                        <option value="">All Cities</option>
                        {cities.map(city => (
                            <option key={city} value={city}>{city}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Desktop Filters */}
            <div className="hidden md:flex md:flex-col p-4 bg-white w-1/4">
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search benefits..."
                        className="w-full p-2 bg-gray-100 rounded text-black"
                        value={filters.searchQuery}
                        onChange={(e) => handleFilterChange("searchQuery", e.target.value)}
                    />
                </div>
                
                <div className="mb-4">
                    <h4 className="text-black mb-2">Price Range</h4>
                    <Slider
                        range
                        min={10}
                        max={3000}
                        step={1000}
                        value={filters.priceRange}
                        onChange={(value) => handleFilterChange("priceRange", value)}
                        trackStyle={[{ backgroundColor: "#4CAF50" }]}
                        handleStyle={[{ borderColor: "#4CAF50" }]}
                    />
                    <div className="flex justify-between text-sm mt-2 text-black">
                        <span>₹{filters.priceRange[0]}</span>
                        <span>₹{filters.priceRange[1]}</span>
                    </div>
                </div>

                <div className="mb-4 relative">
                    <h4 className="text-black mb-2">City</h4>
                    <select
                        className="w-full p-2 bg-gray-100 rounded text-black appearance-none"
                        value={filters.city}
                        onChange={(e) => handleFilterChange("city", e.target.value)}
                        style={{ direction: 'ltr' }}
                    >
                        <option value="">All Cities</option>
                        {cities.map(city => (
                            <option key={city} value={city}>{city}</option>
                        ))}
                    </select>
                </div>

                <div className="relative">
                    <h4 className="text-black mb-2">Brand</h4>
                    <select
                        className="w-full p-2 bg-gray-100 rounded text-black appearance-none"
                        value={filters.brand}
                        onChange={(e) => handleFilterChange("brand", e.target.value)}
                        style={{ direction: 'ltr' }}
                    >
                        <option value="">All Brands</option>
                        {brands.map(brand => (
                            <option key={brand} value={brand}>{brand}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Benefits Grid */}
            <div className="w-full">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-white">
                    {filteredData.map((datab, i) => (
                        <div key={i} className="w-[42vw] md:w-[16vw] mb-[2rem]">
                            <Link to='/ServiceInfo' state={{datab}}>
                                <div className="benefit-image-wrapper w-[44vw] md:w-[16vw]">
                                    <img 
                                        alt={datab.ContentTitle} 
                                        className="primary-image h-[165px] !w-[100%] md:w-[300px]" 
                                        src={datab.VendorImages}
                                    />
                                </div>
                                <div>
                                    <div className="benefit-title-container" style={{width:"100%"}}>
                                        <h5 style={{color:"white", fontWeight:"bold"}} className="no-translation text-black">
                                            {datab.VendorName}
                                        </h5>
                                    </div>
                                    <div className="benefit-description-container line-clamp-3 text-black" 
                                        style={{overflow:"hidden", fontSize:"12px", width:"70%"}}>
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

export default PopularBenefitsList;