import React, { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Link } from "react-router-dom";

const TravelResults = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [brands, setBrands] = useState([]);
    const [filters, setFilters] = useState({
        searchQuery: "",
        priceRange: [0, 10000],
        rating: "",
        brand: ""
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/Vendor/vendors`);
                if (!response.ok) throw new Error("Failed to fetch data");
                const result = await response.json();
                const travel = result.Data.filter(item => item.VendorCategory === "Travel");
                console.log(travel)

                // Extract unique brands from the data
                const brandList = [...new Set(travel.map(item => item.Brand))].filter(Boolean);

                setData(travel);
                setFilteredData(travel);
                setBrands(brandList);
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

        // Brand filter
        if (filters.brand) {
            filtered = filtered.filter(item => item.Brand === filters.brand);
        }

        setFilteredData(filtered);
    }, [filters, data]);

    return (
        <div className="min-h-screen bg-black text-white flex flex-col md:flex-row ">
            {/* Filters - Mobile View */}
            <div className="block md:hidden p-4 bg-black gap-4 ">
                {/* Search Bar */}
                <input
                    type="text"
                    placeholder="Search travel experiences..."
                    className="w-full p-2 bg-gray-800 rounded text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                    value={filters.searchQuery}
                    onChange={(e) => handleFilterChange("searchQuery", e.target.value)}
                />

                {/* Brand Dropdown */}
                <select
                    className="w-full p-2 bg-gray-800 rounded text-white mt-2"
                    value={filters.brand}
                    onChange={(e) => handleFilterChange("brand", e.target.value)}
                >
                    <option value="">All Brands</option>
                    {brands.map(brand => (
                        <option key={brand} value={brand}>{brand}</option>
                    ))}
                </select>
            </div>

            {/* Filters - Desktop View */}
            <div className="hidden md:flex md:flex-col p-4 bg-black w-1/4">
            <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search travel experiences..."
                        className="w-full p-2 bg-gray-800 rounded text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                        value={filters.searchQuery}
                        onChange={(e) => handleFilterChange("searchQuery", e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <h4 className="text-white mb-2">Price Range</h4>
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

                {/* Rating Filter */}
                <div className="mb-4">
                    <h4 className="text-white mb-2">Rating</h4>
                    <select
                        className="w-full p-2 bg-gray-800 rounded text-white"
                        value={filters.rating}
                        onChange={(e) => handleFilterChange("rating", e.target.value)}
                    >
                        <option value="">All Ratings</option>
                        <option value="5">5 Stars</option>
                        <option value="4">4+ Stars</option>
                        <option value="3">3+ Stars</option>
                    </select>
                </div>

                {/* Brand Filter */}
                <div>
                    <h4 className="text-white mb-2">Brand</h4>
                    <select
                        className="w-full p-2 bg-gray-800 rounded text-white"
                        value={filters.brand}
                        onChange={(e) => handleFilterChange("brand", e.target.value)}
                    >
                        <option value="">All Brands</option>
                        {brands.map(brand => (
                            <option key={brand} value={brand}>{brand}</option>
                        ))}
                    </select>
                </div>
            </div>

            
            {/* Results Grid */}
            <div className="w-full md:w-3/4 p-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {filteredData.length > 0 ? (
                    filteredData.map((service, index) => (
                        <div key={index} className="bg-black rounded-lg overflow-hidden">
                            <Link to="/TravelInfo" state={{ service }}>
                                <div className="relative h-48">
                                    <img
                                        src={service.VendorImages || "/api/placeholder/400/200"}
                                        alt={service.VendorName}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-2">
                                    <h3 className="text-xl font-bold mb-2 text-white">{service.VendorName}</h3>
                                    <div className="flex items-center mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <span
                                                key={i}
                                                className={`text-lg ${
                                                    i < parseInt(service.VendorRating)
                                                        ? "text-yellow-400"
                                                        : "text-gray-400"
                                                }`}
                                            >
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-sm mb-2 line-clamp-2">{service.VendorDescription}</p>
                                    <p className="text-sm font-semibold">
                                        {service.VendorPricingInfo.Currency + " "}
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
    );
};

export default TravelResults;
