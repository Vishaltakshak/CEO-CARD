import React, { useState, useEffect } from "react";
import "../css/browsebycategoryresultdetails.css";

const TravelResults = ({ travelData = [] }) => {
    const [isSidebarVisible, setSidebarVisible] = useState(true);
    const [filteredData, setFilteredData] = useState(travelData);

    const handleSidebarToggle = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    const handleFilter = (category) => {
        const filtered = travelData.filter(item =>
            item.VendorCategory.toLowerCase().includes(category.toLowerCase())
        );
        setFilteredData(filtered);
    };

    const resetFilters = () => {
        setFilteredData(travelData);
    };
    const [data, setData] = useState([]);
   
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/Vendor/vendors`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                console.log("response is",response)
                const result = await response.json();
            
                const Travel = await result.Data.filter(item=>item.VendorCategory==='Travel')
                console.log("result is", Travel);
                
                
                setData(Travel)
                
            } catch (err) {
                throw err
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <div className="container-fluid pe-0 ps-0 browse-category-result">
                <div className="col-xl-12">
                    <div className="d-flex">
                        {/* Sidebar */}
                        {isSidebarVisible && (
                            <div className="sidebar">
                                <button onClick={handleSidebarToggle}>Close Sidebar</button>
                                <h4>Categories</h4>
                                <ul>
                                    <li onClick={() => handleFilter("Airport Lounges")}>Airport Lounges</li>
                                    <li onClick={() => handleFilter("Hotel Rewards")}>Hotel Rewards</li>
                                    <li onClick={() => handleFilter("Ground Transportation")}>Ground Transportation</li>
                                    <li onClick={() => handleFilter("Premium Airlines")}>Premium Airlines</li>
                                </ul>
                                <button className="btn reset-filters" onClick={resetFilters}>
                                    Reset Filters
                                </button>
                            </div>
                        )}

                        {/* Results */}
                        <div className="results">
                            <div className="d-flex justify-content-between">
                                {!isSidebarVisible && (
                                    <button onClick={handleSidebarToggle}>Show Sidebar</button>
                                )}
                            </div>
                            <div className="result-grid">
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-2 member-benefit-block-popular flex " >
                {data.map((data, i) => (
                    <div >
                        <a href="/SubMenu">
                            <div className="benefit-image-wrapper">
                                
                                <img  alt={data.ContentTitle} className="primary-image" src={data.VendorImages}></img>

                            </div>
                        </a>
                        <div>

                            <div className="benefit-title-container col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6" style={{width:"100%"}} key={i}>
                                <a href="/SubMenu" class="link-no-underline">
                                    <h5 style={{color:"white", fontWeight:"bold"}} className="no-translation">{data.VendorName}</h5>
                                </a>
                            </div>
                            <div className="benefit-description-container col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6" style={{overflow:"hidden", fontSize:"12px", maxHeight:"60px", width:"100%"}}>
                                {data.VendorDescription}
                            </div>
                        </div >
                    </div>
                ))}
            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TravelResults;
