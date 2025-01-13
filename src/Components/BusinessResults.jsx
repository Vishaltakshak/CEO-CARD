// import React, { useState, useEffect } from "react";
// import Slider from 'rc-slider';
// import 'rc-slider/assets/index.css';
// import { Link } from "react-router-dom";

// const BusinessResults = ({ travelData = [] }) => {
//     const [isSidebarVisible, setSidebarVisible] = useState(true);
//     const [filteredData, setFilteredData] = useState([]);
//     const [data, setData] = useState([]);
//     const [priceRange, setPriceRange] = useState([0, 10000]); // Increased range for rupees
//     const [selectedCategory, setSelectedCategory] = useState('');
//     const [selectedRating, setSelectedRating] = useState(0);

//     // const handleSidebarToggle = () => {
//     //     setSidebarVisible(!isSidebarVisible);
//     // };

//     const handleFilter = (category) => {
//         setSelectedCategory(category);
//         applyFilters(category, priceRange, selectedRating);
//     };

//     const handlePriceChange = (value) => {
//         setPriceRange(value);
//         applyFilters(selectedCategory, value, selectedRating);
//     };

//     const handleRatingChange = (rating) => {
//         setSelectedRating(rating === selectedRating ? 0 : rating); // Toggle rating if clicking the same star
//         applyFilters(selectedCategory, priceRange, rating === selectedRating ? 0 : rating);
//     };

//     const applyFilters = (category, price, rating) => {
//         let filtered = [...data]; // Create a new array from data

//         // Apply category filter
//         if (category) {
//             filtered = filtered.filter(item =>
//                 item.VendorCategory.toLowerCase().includes(category.toLowerCase())
//             );
//         }

//         // Apply price filter
//         filtered = filtered.filter(item => {
//             const itemPrice = parseFloat(item.Price) || 0;
//             return itemPrice >= price[0] && itemPrice <= price[1];
//         });

//         // Apply rating filter
//         if (rating > 0) {
//             filtered = filtered.filter(item => {
//                 const itemRating = parseFloat(item.Rating) || 0;
//                 return itemRating >= rating;
//             });
//         }

//         setFilteredData(filtered);
//     };

//     const resetFilters = () => {
//         setSelectedCategory('');
//         setPriceRange([0, 10000]);
//         setSelectedRating(0);
//         setFilteredData(data);
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/Vendor/vendors`);
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch data');
//                 }
//                 const result = await response.json();
//                 const Travel = result.Data.filter(item => item.VendorCategory === 'Business');
                
//                 // Add sample price and rating if they don't exist
//                 const enrichedData = Travel.map(item => ({
//                     ...item,
//                     Price: item.Price || Math.floor(Math.random() * 10000),
//                     Rating: item.Rating || Math.floor(Math.random() * 5) + 1
//                 }));
                
//                 setData(enrichedData);
//                 setFilteredData(enrichedData);
//             } catch (err) {
//                 console.error('Error fetching data:', err);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div className="container-fluid pe-0 ps-0 browse-category-result">
//             <div className="col-xl-12">
//                 <div className="d-flex">
//                     {isSidebarVisible && (
//                         <div className="sidebar bg-black p-4 rounded-lg hidden md:block" >
//                             {/* <button 
//                                 onClick={handleSidebarToggle}
//                                 className="mb-4 px-4 py-2 bg-gray-700 text-white rounded"
//                             >
//                                 Close Sidebar
//                             </button> */}
                            
//                             <div className="mb-6">
//                                 <h4 className="text-white mb-4">Categories</h4>
//                                 <ul className="space-y-2">
//                                     {["Airport Lounges", "Hotel Rewards", "Ground Transportation", "Premium Airlines"].map((category) => (
//                                         <li 
//                                             key={category}
//                                             onClick={() => handleFilter(category)}
//                                             className={`cursor-pointer ${
//                                                 selectedCategory === category ? 'text-white font-bold' : 'text-gray-300'
//                                             } hover:text-white`}
//                                         >
//                                             {category}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>

//                             <div className="mb-6">
//                                 <h4 className="text-white mb-4">Price Range</h4>
//                                 <Slider
//                                     range
//                                     min={0}
//                                     max={10000}
//                                     value={priceRange}
//                                     onChange={handlePriceChange}
//                                     className="mb-2"
//                                     railStyle={{ backgroundColor: '#4B5563' }}
//                                     trackStyle={[{ backgroundColor: 'white' }]}
//                                     handleStyle={[
//                                         { borderColor: 'white', backgroundColor: 'white' },
//                                         { borderColor: 'white', backgroundColor: 'white' }
//                                     ]}
//                                 />
//                                 <div className="text-white">
//                                     ₹{priceRange[0]} - ₹{priceRange[1]}
//                                 </div>
//                             </div>

//                             <div className="mb-6">
//                                 <h4 className="text-white mb-4">Rating</h4>
//                                 <div className="space-y-2">
//                                     {[5, 4, 3, 2, 1].map((rating) => (
//                                         <div 
//                                             key={rating}
//                                             onClick={() => handleRatingChange(rating)}
//                                             className={`cursor-pointer ${
//                                                 selectedRating === rating ? 'text-white font-bold' : 'text-gray-300'
//                                             }`}
//                                         >
//                                             {'★'.repeat(rating)}{'☆'.repeat(5-rating)}
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>

//                             <button 
//                                 className="px-4 py-2 bg-gray-700 text-white rounded w-full"
//                                 onClick={resetFilters}
//                             >
//                                 Reset Filters
//                             </button>
//                         </div>
//                     )}

//                     <div className="results flex-1 p-4">
//                         <div className="result-grid">
//                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                                 {filteredData.map((item, i) => (
//                                     <div key={i} className="bg-black rounded-lg overflow-hidden">
                                        
//                                         <Link to='/BusinessInfo' state={{item}}>
//                                             <div className="benefit-image-wrapper">
//                                                 <img alt={item.ContentTitle} className="w-full h-48 object-cover" src={item.VendorImages} />
//                                             </div>
                                        
//                                             <div className="p-4">
//                                             <div className="mb-2">
                                               
//                                                     <h5 className="text-white font-bold text-lg">
//                                                         {item.VendorName}
//                                                     </h5>
                                               
//                                             </div>
//                                             <div className="text-gray-300 text-sm mb-2">
//                                                 Price: ₹{item.Price}
//                                             </div>
//                                             <div className="text-yellow-400 mb-2">
//                                                 {'★'.repeat(item.Rating)}{'☆'.repeat(5-item.Rating)}
//                                             </div>
//                                             <div className="text-gray-400 text-sm" style={{maxHeight: "60px", overflow: "hidden"}}>
//                                                 {item.VendorDescription}
//                                             </div>
//                                         </div>
//                                             </Link>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BusinessResults;
import React, { useState, useEffect } from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Link } from "react-router-dom";

const BusinessResults = ({ travelData = [] }) => {
    const [isSidebarVisible, setSidebarVisible] = useState(true);
    const [filteredData, setFilteredData] = useState([]);
    const [data, setData] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 10000]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedRating, setSelectedRating] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');

    const handleFilter = (category) => {
        setSelectedCategory(category);
        applyFilters(category, priceRange, selectedRating, searchQuery);
    };

    const handlePriceChange = (value) => {
        setPriceRange(value);
        applyFilters(selectedCategory, value, selectedRating, searchQuery);
    };

    const handleRatingChange = (rating) => {
        setSelectedRating(rating === selectedRating ? 0 : rating);
        applyFilters(selectedCategory, priceRange, rating === selectedRating ? 0 : rating, searchQuery);
    };

    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        applyFilters(selectedCategory, priceRange, selectedRating, query);
    };

    const applyFilters = (category, price, rating, query) => {
        let filtered = [...data];

        // Apply search filter
        if (query) {
            filtered = filtered.filter(item =>
                item.VendorName.toLowerCase().includes(query.toLowerCase()) ||
                item.VendorDescription.toLowerCase().includes(query.toLowerCase())
            );
        }

        // Apply category filter
        if (category) {
            filtered = filtered.filter(item =>
                item.VendorCategory.toLowerCase().includes(category.toLowerCase())
            );
        }

        // Apply price filter
        filtered = filtered.filter(item => {
            const itemPrice = parseFloat(item.Price) || 0;
            return itemPrice >= price[0] && itemPrice <= price[1];
        });

        // Apply rating filter
        if (rating > 0) {
            filtered = filtered.filter(item => {
                const itemRating = parseFloat(item.Rating) || 0;
                return itemRating >= rating;
            });
        }

        setFilteredData(filtered);
    };

    const resetFilters = () => {
        setSelectedCategory('');
        setPriceRange([0, 10000]);
        setSelectedRating(0);
        setSearchQuery('');
        setFilteredData(data);
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
                
                const enrichedData = Travel.map(item => ({
                    ...item,
                    Price: item.Price || Math.floor(Math.random() * 10000),
                    Rating: item.Rating || Math.floor(Math.random() * 5) + 1
                }));
                
                setData(enrichedData);
                setFilteredData(enrichedData);
            } catch (err) {
                console.error('Error fetching data:', err);
            }
        };

        fetchData();
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
                            
                            <div className="mb-6">
                                <h4 className="text-white mb-4">Categories</h4>
                                <ul className="space-y-2">
                                    {["Airport Lounges", "Hotel Rewards", "Ground Transportation", "Premium Airlines"].map((category) => (
                                        <li 
                                            key={category}
                                            onClick={() => handleFilter(category)}
                                            className={`cursor-pointer ${
                                                selectedCategory === category ? 'text-white font-bold' : 'text-gray-300'
                                            } hover:text-white`}
                                        >
                                            {category}
                                        </li>
                                    ))}
                                </ul>
                            </div>

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
                                    handleStyle={[
                                        { borderColor: 'white', backgroundColor: 'white' },
                                        { borderColor: 'white', backgroundColor: 'white' }
                                    ]}
                                />
                                <div className="text-white">
                                    ₹{priceRange[0]} - ₹{priceRange[1]}
                                </div>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-white mb-4">Rating</h4>
                                <div className="space-y-2">
                                    {[5, 4, 3, 2, 1].map((rating) => (
                                        <div 
                                            key={rating}
                                            onClick={() => handleRatingChange(rating)}
                                            className={`cursor-pointer ${
                                                selectedRating === rating ? 'text-white font-bold' : 'text-gray-300'
                                            }`}
                                        >
                                            {'★'.repeat(rating)}{'☆'.repeat(5-rating)}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button 
                                className="px-4 py-2 bg-gray-700 text-white rounded w-full"
                                onClick={resetFilters}
                            >
                                Reset Filters
                            </button>
                        </div>
                    )}

                    <div className="results flex-1 p-4">
                        <div className="result-grid">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {filteredData.map((item, i) => (
                                    <div key={i} className="bg-black rounded-lg overflow-hidden">
                                        <Link to='/BusinessInfo' state={{item}}>
                                            <div className="benefit-image-wrapper">
                                                <img alt={item.ContentTitle} className="w-full h-48 object-cover" src={item.VendorImages} />
                                            </div>
                                        
                                            <div className="p-4">
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