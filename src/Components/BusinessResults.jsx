import React, { useState, useEffect } from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Link } from "react-router-dom";

const BusinessResults = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(true);
    const [filteredData, setFilteredData] = useState([]);
    const [data, setData] = useState([]);
    const [brands, setBrands] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 10000]);
    const [selectedCity, setSelectedCity] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [cities, setCities] = useState([]);
    const [filters, setFilters] = useState({
        searchQuery: "",
        priceRange: [0, 10000],
        city: "",
        brand: ""
    });

    const handleFilterChange = (filterName, value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filterName]: value
        }));
    };

    const handleFilterBrand = (brand) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            brand: brand
        }));
        applyFilters(brand, filters.city, priceRange, searchQuery);
    };

    const handleFilterCity = (city) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            city: city
        }));
        applyFilters(filters.brand, city, priceRange, searchQuery);
    };

    const handlePriceChange = (value) => {
        setPriceRange(value);
        applyFilters(filters.brand, filters.city, value, searchQuery);
    };

    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        applyFilters(filters.brand, filters.city, priceRange, query);
    };

    const applyFilters = (brand, city, price, query) => {
        let filtered = [...data];

        // Apply search filter
        if (query) {
            filtered = filtered.filter(item =>
                item.VendorName.toLowerCase().includes(query.toLowerCase()) ||
                item.VendorDescription.toLowerCase().includes(query.toLowerCase())
            );
        }

        // Apply brand filter
        if (brand) {
            filtered = filtered.filter(item => item.Brand?.trim() === brand.trim());
        }

        // Apply city filter
        if (city) {
            filtered = filtered.filter(item => item.City === city);
        }

        // Apply price filter
        filtered = filtered.filter(item => {
            const itemPrice = parseFloat(item.Price) || 0;
            return itemPrice >= price[0] && itemPrice <= price[1];
        });

        setFilteredData(filtered);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/Vendor/vendors`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result = await response.json();
                const Travel = result.Data.filter(item => item.VendorCategory === 'Business');
                const cityList = [...new Set(Travel.map(item => item.City))].filter(Boolean);
                const brandList = [...new Set(
                        Travel
                        .map(item => item.Brand?.trim())
                        .filter(Boolean)
                        .sort()
                )];
                const enrichedData = Travel.map(item => ({
                    ...item,
                    Price: item.Price || Math.floor(Math.random() * 10000),
                    Rating: item.Rating || Math.floor(Math.random() * 5) + 1
                }));

                setData(enrichedData);
                setFilteredData(enrichedData);
                setCities(cityList);
                setBrands(brandList);
            } catch (err) {
                console.error('Error fetching vendor data:', err);
            }
        };

        const fetchBrands = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/Vendor/brands`);
                if (!response.ok) {
                    throw new Error('Failed to fetch brands');
                }
                const result = await response.json();
                setBrands(result.Data || []); // Ensure it defaults to an empty array if no data
            } catch (err) {
                console.error('Error fetching brands:', err);
            }
        };

        fetchData();
        fetchBrands();
    }, []);

    return (
        <div className="bg-white pe-0 ps-0 browse-category-result">
            <div className="col-xl-12">
                <div className="d-flex flex-col md:flex-row">
                    {isSidebarVisible && (
                        <div className="sidebar bg-white p-4 rounded-lg hidden md:block">
                            <div className="mb-6">
                                {/* <h4 className="text-white mb-4">Search</h4> */}
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={handleSearch}
                                    placeholder="Search ..."
                                    className="w-full px-3 py-2 bg-gray-100 text-black rounded focus:outline-white focus:ring-2 focus:ring-white"
                                />
                            </div>

                            <div className="mb-6">
                                <h4 className="text-black mb-2">Brand</h4>
                                <select
                                    className="w-full p-2 bg-gray-100 rounded text-black appearance-none"
                                    value={filters.brand}
                                    onChange={(e) => handleFilterBrand(e.target.value)}
                                    style={{ direction: 'ltr' }}
                                >
                                    <option value="">All Brands</option>
                                    {brands.map(brand => (
                                        <option key={brand} value={brand}>{brand}</option>
                                    ))}
                                </select>
                            </div>

                            
                            <div className="mb-6">
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
                            {/* <div className="mb-6">
                                <h4 className="text-white mb-4">City</h4>
                                <input
                                    type="text"
                                    value={filters.city}
                                    onChange={(e) => handleFilterCity(e.target.value)}
                                    placeholder="Enter city..."
                                    className="w-full px-3 py-2 bg-black text-white rounded focus:outline-none focus:ring-2 focus:ring-white"
                                />
                            </div> */}

                            <div className="mb-6">
                                <h4 className="text-black mb-4">Price Range</h4>
                                <Slider
                                    range
                                    min={0}
                                    max={10000}
                                    value={priceRange}
                                    onChange={handlePriceChange}
                                    className="mb-2"
                                    railStyle={{ backgroundColor: '#4B5563' }}
                                    trackStyle={[{ backgroundColor: 'black' }]}
                                    handleStyle={[{ borderColor: 'black', backgroundColor: 'black' }]}
                                />
                                <div className="text-black">
                                    ₹{priceRange[0]} - ₹{priceRange[1]}
                                </div>
                            </div>
                        </div>
                    )}
                     {/* Mobile Filters */}
                     <div className="block md:hidden p-4 bg-gray text-black space-y-4">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearch}
                            placeholder="Search..."
                            className="w-full px-3 py-2 bg-gray-100 text-black rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                        />
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
                    <div className="results flex-1 p-4">
                        <div className="result-grid">
                            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white">
                                {filteredData.map((item, i) => (
                                    <div key={i} className="bg-white rounded-lg overflow-hidden">
                                        <Link to='/BusinessInfo' state={{item}}>
                                            <div className="benefit-image-wrapper">
                                                <img alt={item.ContentTitle} className="w-full min-h-[16vh] object-cover" src={item.VendorImages} />
                                            </div>
                                            <div>
                                                <div className="mb-2">
                                                    <h5 className="text-black font-bold text-lg">
                                                        {item.VendorName}
                                                    </h5>
                                                </div>
                                                <div className="text-gray-800 text-sm mb-2">
                                                    Price: ₹{item.Price}
                                                </div>
                                                <div className="text-yellow-400 mb-2">
                                                    {'★'.repeat(item.Rating)}{'☆'.repeat(5 - item.Rating)}
                                                </div>
                                                <div className="text-black text-sm" style={{maxHeight: "60px", overflow: "hidden"}}>
                                                    {item.VendorDescription}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessResults;
