import React, { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Link } from "react-router-dom";

const BrowseHotelsFavourites = () => {
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [cities, setCities] = useState([]);
  const [brands, setBrands] = useState([]);
  const [filters, setFilters] = useState({
    searchQuery: "",
    priceRange: [1000, 30000],
    city: "",
    brand: ""
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/Vendor/vendors`,{
          method:'GET',
          credentials:"include",
          headers:{
            'Content-Type':'application/json'
          }
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        const hotelData = result.Data.filter((item) => item.VendorCategory === "Hotel");
        
        // Extract unique cities and brands directly from the properties
        const cityList = [...new Set(hotelData.map(hotel => hotel.City))].filter(Boolean);
        const brandList = [...new Set(hotelData.map(hotel => hotel.Brand))].filter(Boolean);
        
        setHotels(hotelData);
        setFilteredHotels(hotelData);
        setCities(cityList);
        setBrands(brandList);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  const handleFilterChange = (filterName, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: value
    }));
  };

  useEffect(() => {
    let filtered = [...hotels];

    // Search filter
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter(hotel =>
        hotel.VendorName.toLowerCase().includes(query) ||
        hotel.VendorDescription.toLowerCase().includes(query)
      );
    }

    // Price range filter
    const [minPrice, maxPrice] = filters.priceRange;
    filtered = filtered.filter(hotel => {
      const hotelMin = hotel?.VendorPricingInfo?.PriceRange?.Min || 0;
      const hotelMax = hotel?.VendorPricingInfo?.PriceRange?.Max || Infinity;
      return hotelMin >= minPrice && hotelMax <= maxPrice;
    });

    // City filter
    if (filters.city) {
      filtered = filtered.filter(hotel => hotel.City === filters.city);
    }

    // Brand filter
    if (filters.brand) {
      filtered = filtered.filter(hotel => hotel.Brand === filters.brand);
    }

    setFilteredHotels(filtered);
  }, [filters, hotels]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="min-h-screen bg-white text-black flex flex-col md:flex-row ">
      {/* Mobile Filters */}
      <div className="block md:hidden p-4 bg-white gap-4 ">
        <input
          type="text"
          placeholder="Search hotels..."
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
            placeholder="Search hotels..."
            className="w-full p-2 bg-white rounded text-black"
            value={filters.searchQuery}
            onChange={(e) => handleFilterChange("searchQuery", e.target.value)}
          />
        </div>
        
        <div className="mb-4">
          <h4 className="text-black mb-2">Price Range</h4>
          <Slider
            range
            min={1000}
            max={30000}
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
          <h4 className="text-blakc mb-2">City</h4>
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
          <h4 className="text-blakc mb-2">Brand</h4>
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

      {/* Hotels Grid */}
      <div className="w-full md:w-3/4 p-4 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {filteredHotels.length > 0 ? (
            filteredHotels.map((hotel, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden">
                <Link to="/HotelInfo" state={{ hotel }}>
                  <div className="relative h-[16vh]">
                    <img
                      src={hotel.VendorImages || "/api/placeholder/400/200"}
                      alt={hotel.VendorName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div >
                    <h3 className="text-xl font-bold mb-2 text-black">{hotel.VendorName}</h3>
                    <p className="text-sm mb-2 line-clamp-2 text-black">{hotel.VendorDescription}</p>
                    {hotel.VendorPricingInfo && (
                      <p className="text-sm font-semibold text-black">
                        ₹{hotel.VendorPricingInfo.PriceRange?.Min?.toLocaleString()} - 
                        ₹{hotel.VendorPricingInfo.PriceRange?.Max?.toLocaleString()}
                      </p>
                    )}
                   
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-black col-span-full">No hotels match your filters.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrowseHotelsFavourites;