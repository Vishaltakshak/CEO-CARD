import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Link } from "react-router-dom";

const TravelResults = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [filters, setFilters] = useState({
        searchQuery: "",
        priceRange: [0, 10000],
        rating: "",
        travelStyle: "",
        duration: ""
    });

    const travelStyles = [
        "Luxury Travel",
        "Budget Travel",
        "Adventure Travel",
        "Business Travel",
        "Family Travel"
    ];

    const durations = [
        "1-3 days",
        "4-7 days",
        "8-14 days",
        "15+ days"
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/Vendor/vendors`);
                if (!response.ok) throw new Error('Failed to fetch data');
                const result = await response.json();
                const travel = result.Data.filter(item => item.VendorCategory === 'Travel');
                setData(travel);
                setFilteredData(travel);
            } catch (err) {
                console.error(err);
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
        }

        // Price range filter
        const [minPrice, maxPrice] = filters.priceRange;
        filtered = filtered.filter(item => {
            const itemMin = item?.VendorPricingInfo?.PriceRange?.Min || 0;
            const itemMax = item?.VendorPricingInfo?.PriceRange?.Max || Infinity;
            return itemMin >= minPrice && itemMax <= maxPrice;
        });

        // Rating filter
        if (filters.rating) {
            filtered = filtered.filter(item => 
                Number(item.VendorRating) >= Number(filters.rating)
            );
        }

        // Travel Style filter
        if (filters.travelStyle) {
            filtered = filtered.filter(item => 
                item.VendorDescription.toLowerCase().includes(filters.travelStyle.toLowerCase())
            );
        }

        // Duration filter
        if (filters.duration) {
            filtered = filtered.filter(item => 
                item.VendorDescription.toLowerCase().includes(filters.duration.toLowerCase())
            );
        }

        setFilteredData(filtered);
    }, [filters, data]);

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Mobile Header */}
            <div className="md:hidden flex justify-between items-center p-4 bg-black">
                <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-4 mt-[4rem] md:mt-0 visible md:hidden"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <div className="container mr-1 ml-1 min-w-[100vw]">
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Filters Sidebar */}
                    <div className={`
                        md:w-1/4 bg-black p-4 rounded-lg
                        ${isMobileMenuOpen ? 'block' : 'hidden'} 
                        md:block transition-all duration-300 ease-in-out
                    `}>
                        <h2 className="text-xl font-bold mb-6">Filters</h2>
                        
                        {/* Search Filter */}
                        <div className="mb-6">
                            <h3 className="text-lg mb-2">Search</h3>
                            <input
                                type="text"
                                placeholder="Search travel experiences..."
                                className="w-full p-2 bg-gray-800 rounded text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                                value={filters.searchQuery}
                                onChange={(e) => handleFilterChange("searchQuery", e.target.value)}
                            />
                        </div>

                        {/* Price Range Slider */}
                        <div className="mb-6">
                            <h3 className="text-lg mb-2">Price Range</h3>
                            <Slider
                                range
                                min={0}
                                max={10000}
                                step={100}
                                value={filters.priceRange}
                                onChange={(value) => handleFilterChange("priceRange", value)}
                                trackStyle={[{ backgroundColor: "#4CAF50" }]}
                                handleStyle={[{ borderColor: "#4CAF50" }]}
                            />
                            <div className="flex justify-between text-sm mt-2">
                                <span>&#8377;{filters.priceRange[0]}</span>
                                <span>&#8377;{filters.priceRange[1]}</span>
                            </div>
                        </div>

                        {/* Rest of the filters remain the same */}
                        <div className="mb-6">
                            <h3 className="text-lg mb-2">Rating</h3>
                            <select 
                                className="w-full p-2 bg-gray-800 rounded text-white cursor-pointer"
                                value={filters.rating}
                                onChange={(e) => handleFilterChange("rating", e.target.value)}
                            >
                                <option value="">All Ratings</option>
                                <option value="5">5 Stars</option>
                                <option value="4">4+ Stars</option>
                                <option value="3">3+ Stars</option>
                            </select>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-lg mb-2">Travel Style</h3>
                            <select 
                                className="w-full p-2 bg-gray-800 rounded text-white cursor-pointer"
                                value={filters.travelStyle}
                                onChange={(e) => handleFilterChange("travelStyle", e.target.value)}
                            >
                                <option value="">All Styles</option>
                                {travelStyles.map(style => (
                                    <option key={style} value={style}>{style}</option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-lg mb-2">Duration</h3>
                            <select 
                                className="w-full p-2 bg-gray-800 rounded text-white cursor-pointer"
                                value={filters.duration}
                                onChange={(e) => handleFilterChange("duration", e.target.value)}
                            >
                                <option value="">Any Duration</option>
                                {durations.map(duration => (
                                    <option key={duration} value={duration}>{duration}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Results Grid - remains the same */}
                    <div className="  md:w-3/4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mr-2">
                        {filteredData.length > 0 ? (
                            filteredData.map((service, index) => (
                                <div key={index} className="bg-black rounded-lg overflow-hidden">
                                    <Link to='/TravelInfo' state={{service}}>
                                    <div className="relative h-48">
                                        <img
                                            src={service.VendorImages || '/api/placeholder/400/200'}
                                            alt={service.VendorName}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div >
                                        <h3 className="text-xl font-bold mb-2 text-white">{service.VendorName}</h3>
                                        <div className="flex items-center mb-2">
                                            {[...Array(5)].map((_, i) => (
                                                <span 
                                                    key={i}
                                                    className={`text-lg ${
                                                        i < parseInt(service.VendorRating)
                                                            ? 'text-yellow-400'
                                                            : 'text-gray-400'
                                                    }`}
                                                >
                                                    ★
                                                </span>
                                            ))}
                                        </div>
                                        <p className="text-sm mb-2 line-clamp-2">{service.VendorDescription}</p>
                                        <p className="text-sm font-semibold">
                                            {service.VendorPricingInfo.Currency+" "}
                                            {service.VendorPricingInfo.PriceRange.Min.toLocaleString() + " - "} 
                                            {service.VendorPricingInfo.PriceRange.Max.toLocaleString()}
                                        </p>
                                    </div>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-400">No travel experiences match your filters.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelResults;