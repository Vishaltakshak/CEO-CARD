import React, { useState, useEffect } from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Link } from "react-router-dom";

const BusinessResults = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(true);
    const [filteredData, setFilteredData] = useState([]);
    const [data, setData] = useState([]);
    const [brands, setBrands] = useState([]); // To store brands fetched from backend
    const [priceRange, setPriceRange] = useState([0, 10000]);
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const handleFilterBrand = (brand) => {
        setSelectedBrand(brand);
        applyFilters(brand, selectedCity, priceRange, searchQuery);
    };

    const handleFilterCity = (city) => {
        setSelectedCity(city);
        applyFilters(selectedBrand, city, priceRange, searchQuery);
    };

    const handlePriceChange = (value) => {
        setPriceRange(value);
        applyFilters(selectedBrand, selectedCity, value, searchQuery);
    };

    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        applyFilters(selectedBrand, selectedCity, priceRange, query);
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
            filtered = filtered.filter(item =>
                item.VendorBrand?.toLowerCase() === brand.toLowerCase()
            );
        }

        // Apply city filter
        if (city) {
            filtered = filtered.filter(item =>
                item.City?.toLowerCase() === city.toLowerCase()
            );
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
                // Fetch data for vendors
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/Vendor/vendors`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result = await response.json();
                const Travel = result.Data.filter(item => item.VendorCategory === 'Business');
                
                const enrichedData = Travel.map(item => ({
                    ...item,
                    Price: item.Price || Math.floor(Math.random() * 10000),
                    Rating: item.Rating || Math.floor(Math.random() * 5) + 1
                }));
                
                setData(enrichedData);
                setFilteredData(enrichedData);
            } catch (err) {
                console.error('Error fetching vendor data:', err);
            }
        };

        const fetchBrands = async () => {
            try {
                // Fetch unique brands from backend
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/Vendor/brands`);
                if (!response.ok) {
                    throw new Error('Failed to fetch brands');
                }
                const result = await response.json();
                setBrands(result.Data); // Assuming the backend sends an array of brand names in `result.Data`
            } catch (err) {
                console.error('Error fetching brands:', err);
            }
        };

        fetchData();
        fetchBrands();
    }, []);

    return (
        <div className="container-fluid pe-0 ps-0 browse-category-result">
            <div className="col-xl-12">
                <div className="d-flex">
                    {isSidebarVisible && (
                        <div className="sidebar bg-black p-4 rounded-lg hidden md:block">
                            {/* Search Input */}
                            <div className="mb-6">
                                <h4 className="text-white mb-4">Search</h4>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={handleSearch}
                                    placeholder="Search ..."
                                    className="w-full px-3 py-2 bg-black text-white rounded focus:outline-none focus:ring-2 focus:ring-white"
                                />
                            </div>
                            
                            {/* Brand Filter */}
                            <div className="mb-6">
                                <h4 className="text-white mb-4">Brands</h4>
                                <ul className="space-y-2">
                                    {brands.map((brand) => (
                                        <li 
                                            key={brand}
                                            onClick={() => handleFilterBrand(brand)}
                                            className={`cursor-pointer ${
                                                selectedBrand === brand ? 'text-white font-bold' : 'text-gray-300'
                                            } hover:text-white`}
                                        >
                                            {brand}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* City Filter */}
                            <div className="mb-6">
                                <h4 className="text-white mb-4">City</h4>
                                <input
                                    type="text"
                                    value={selectedCity}
                                    onChange={(e) => handleFilterCity(e.target.value)}
                                    placeholder="Enter city..."
                                    className="w-full px-3 py-2 bg-black text-white rounded focus:outline-none focus:ring-2 focus:ring-white"
                                />
                            </div>

                            {/* Price Range */}
                            <div className="mb-6">
                                <h4 className="text-white mb-4">Price Range</h4>
                                <Slider
                                    range
                                    min={0}
                                    max={10000}
                                    value={priceRange}
                                    onChange={handlePriceChange}
                                    className="mb-2"
                                    railStyle={{ backgroundColor: '#4B5563' }}
                                    trackStyle={[{ backgroundColor: 'white' }]}
                                    handleStyle={[{ borderColor: 'white', backgroundColor: 'white' }]}
                                />
                                <div className="text-white">
                                    ₹{priceRange[0]} - ₹{priceRange[1]}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Mobile Filters */}
                    <div className="block md:hidden p-4 bg-black text-white space-y-4">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearch}
                            placeholder="Search..."
                            className="w-full px-3 py-2 bg-black text-white rounded focus:outline-none focus:ring-2 focus:ring-white"
                        />
                        <input
                            type="text"
                            value={selectedCity}
                            onChange={(e) => handleFilterCity(e.target.value)}
                            placeholder="Enter city..."
                            className="w-full px-3 py-2 bg-black text-white rounded focus:outline-none focus:ring-2 focus:ring-white"
                        />
                    </div>

                    <div className="results flex-1 p-4">
                        <div className="result-grid">
                            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {filteredData.map((item, i) => (
                                    <div key={i} className="bg-black rounded-lg overflow-hidden">
                                        <Link to='/BusinessInfo' state={{item}}>
                                            <div className="benefit-image-wrapper">
                                                <img alt={item.ContentTitle} className="w-full min-h-48 object-contain" src={item.VendorImages} />
                                            </div>
                                        
                                            <div>
                                                <div className="mb-2">
                                                    <h5 className="text-white font-bold text-lg">
                                                        {item.VendorName}
                                                    </h5>
                                                </div>
                                                <div className="text-gray-300 text-sm mb-2">
                                                    Price: ₹{item.Price}
                                                </div>
                                                <div className="text-yellow-400 mb-2">
                                                    {'★'.repeat(item.Rating)}{'☆'.repeat(5-item.Rating)}
                                                </div>
                                                <div className="text-gray-400 text-sm" style={{maxHeight: "60px", overflow: "hidden"}}>
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
