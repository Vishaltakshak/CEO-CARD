import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../css/pages/search.css";

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [recentSearches, setRecentSearches] = useState([]);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        const storedSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
        setRecentSearches(storedSearches);
    }, []);

    const handleSearch = async (query) => {
        setSearchQuery(query);
        if (!query.trim()) {
            setSearchResults([]);
            return;
        }

        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/Vendor/vendors?search=${query}`, {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) throw new Error("Failed to fetch data");

            const res = await response.json();
            const filteredResults = res?.Data?.filter((vendor) =>
                vendor.VendorName.toLowerCase().startsWith(query.toLowerCase())
            );

            setSearchResults(filteredResults || []);
        } catch (error) {
            console.error("Search error:", error.message);
            setSearchResults([]);
        }
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;

        const updatedSearches = [searchQuery, ...recentSearches.filter(item => item !== searchQuery)].slice(0, 5);
        setRecentSearches(updatedSearches);
        localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));

        handleSearch(searchQuery);
    };

    return (
        <div className="menusearch-container">
            <div className={`search-box-wrapper ${isFocused ? "moved-up" : ""}`}>
                <form className="menusearch-form" onSubmit={handleSearchSubmit}>
                    <div className="search-box">
                        <img 
                            alt="search-icon" 
                            className="search-icon" 
                            src="./assets/img/Search/Search.svg"
                        />
                        <input
                            type="text"
                            className="menusearch-form-input"
                            placeholder="Search for vendors..."
                            value={searchQuery}
                            onChange={(e) => handleSearch(e.target.value)}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(searchQuery.length > 0)}
                        />
                        <button className="menusearch-clear-btn" type="reset" onClick={() => setSearchQuery("")}>×</button>
                    </div>
                </form>
            </div>

            {recentSearches.length > 0 && (
                <div className="col-12 search-history">
                    <div className="search-history-container">
                        <h5>Your Recent Searches</h5>
                        {recentSearches.map((term, index) => (
                            <p key={index} className="search-history-p">
                                <Link className="search-history-term" onClick={() => handleSearch(term)}>
                                    {term}
                                </Link>
                            </p>
                        ))}
                    </div>
                </div>
            )}

            {searchResults.length > 0 && (
                <div className="col-12 search-results">
                    <h5>Search Results</h5>
                    <div className="search-grid">
                        {searchResults.map((vendor, index) => (
                            <Link to={`/vendor/${vendor._id}`} key={index} className="search-card">
                                <img src={vendor.ImageURL || "./assets/img/default-placeholder.png"} alt={vendor.VendorName} />
                                <div className="vendor-info">
                                    <h4>{vendor.VendorName}</h4>
                                    <p>{vendor.VendorCategory}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Search;
