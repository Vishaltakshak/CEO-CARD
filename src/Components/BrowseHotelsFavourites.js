// import React, { useRef } from 'react';
// import PopularBenefitsList from "./PopularBenefitsList";
// import '../css/browsehotelsfavourites.css';
// const BrowseHotelsFavourites = () => {
// 	const navRef = useRef();
// 	/** Decrements or increments scollLeft property to scroll left or right respectively */
// 	const handleNav = (direction) => {
// 		if (direction === 'left') {
// 			if (navRef){
// 				navRef.current.scrollLeft -= 100;
// 			}
// 			} else {
// 				if (navRef) {
// 					navRef.current.scrollLeft += 100
// 				}
// 			}
// 		}
// 	return (
		
// 		<>
// 			<div className="container-fluid hotels-fav-container">
// 				<div className="container">
// 				<div className="row hotels-fav-row">
// 					<div className="col-xl-12 col-lg-12 col-md-12 col-12 hotels-fav-row-tab">
// 						<div className="col-xl-12 col-lg-12 col-md-12 col-12 hotels-fav-row-tab-inner">
// 							<div onClick={() => handleNav('left')} className="scroll-arrow scroller-left float-start">
// 								<i class="bi bi-chevron-left"></i>
// 							</div>
// 							<div onClick={() => handleNav('right')} className="scroll-arrow scroller-right float-end">
// 								<i class="bi bi-chevron-right"></i>
// 							</div>
// 							<div className="col-xl-12 col-lg-12 col-md-12 col-12 scroll-container" ref={navRef}>
// 								<div className="col-xl-12 col-lg-12 col-md-12 col-12 scroll-inner-div" 
// 								>
// 									<nav class="nav nav-tabs hotels-nav-tabs mt-2" id="myTab" role="tablist">
// 										<a class="nav-item nav-link custom-nav-item active" data-bs-toggle="tab" data-bs-target="#tab1" role="tab" aria-controls="public" aria-selected="true">Newest FC Hotels</a>
// 										<a class="nav-item nav-link custom-nav-item" data-bs-target="#tab2" role="tab" data-bs-toggle="tab">Trending in Travel</a>
// 										<a class="nav-item nav-link custom-nav-item" data-bs-target="#tab3" role="tab" data-bs-toggle="tab">Notable Design</a>
// 										<a class="nav-item nav-link custom-nav-item" data-bs-target="#tab4" role="tab" data-bs-toggle="tab">Getaway Destinations</a>
// 										<a class="nav-item nav-link custom-nav-item" data-bs-target="#tab5" role="tab" data-bs-toggle="tab">Award-winning</a>
// 										<a class="nav-item nav-link custom-nav-item" data-bs-target="#tab6" role="tab" data-bs-toggle="tab">Favorite Cities</a>
// 									</nav>
// 								</div>
// 							</div>
// 						</div>

// 						<div class="tab-content custom-tab-content" id="myTabContent">
// 							<div role="tabpanel" class="tab-pane fade active show mt-2 " id="tab1" aria-labelledby="public-tab" >
// 								<div className="row benefits-block-parent benefits-block-parent-favourites">
// 									<PopularBenefitsList></PopularBenefitsList>
								
// 								</div>
// 								<div className="row btn-fav-view-more-box ">
// 									<button className="btn btn-fav-view-more">View More</button>
// 								</div>
// 							</div>
// 							<div class="tab-pane fade mt-2" id="tab2" role="tabpanel" aria-labelledby="group-dropdown2-tab" >
// 								<div className="row benefits-block-parent benefits-block-parent-favourites">
// 									<PopularBenefitsList></PopularBenefitsList>
									
// 								</div>
// 								<div className="row btn-fav-view-more-box ">
// 									<button className="btn btn-fav-view-more">View More</button>
// 								</div>
// 							</div>
// 							<div class="tab-pane fade mt-2" id="tab3" role="tabpanel" aria-labelledby="group-dropdown2-tab" >
// 								<div className="row benefits-block-parent benefits-block-parent-favourites">
// 									<PopularBenefitsList></PopularBenefitsList>
									
// 								</div>
// 								<div className="row btn-fav-view-more-box ">
// 									<button className="btn btn-fav-view-more">View More</button>
// 								</div>
// 							</div>
// 							<div class="tab-pane fade mt-2" id="tab4" role="tabpanel" aria-labelledby="group-dropdown2-tab" >
// 								<div className="row benefits-block-parent benefits-block-parent-favourites">
// 									<PopularBenefitsList></PopularBenefitsList>
									
// 								</div>
// 								<div className="row btn-fav-view-more-box ">
// 									<button className="btn btn-fav-view-more">View More</button>
// 								</div>
// 							</div>
// 							<div class="tab-pane fade mt-2" id="tab5" role="tabpanel" aria-labelledby="group-dropdown2-tab" >
// 								<div className="row benefits-block-parent benefits-block-parent-favourites">
// 									<PopularBenefitsList></PopularBenefitsList>
									
// 								</div>
// 								<div className="row btn-fav-view-more-box ">
// 									<button className="btn btn-fav-view-more">View More</button>
// 								</div>
// 							</div>
// 							<div class="tab-pane fade mt-2" id="tab6" role="tabpanel" aria-labelledby="group-dropdown2-tab" >
// 								<div className="row benefits-block-parent benefits-block-parent-favourites">
// 									<PopularBenefitsList></PopularBenefitsList>
								
// 								</div>
// 								<div className="row btn-fav-view-more-box ">
// 									<button className="btn btn-fav-view-more">View More</button>
// 								</div>
// 							</div>
// 						</div>
							
// 					</div>
// 				</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export default BrowseHotelsFavourites;
import React, { useState, useEffect, useRef } from "react";
import "../css/browsehotelsfavourites.css";

const BrowseHotelsFavourites = () => {
  const navRef = useRef();
  const [hotels, setHotels] = useState([]); // All hotels data
  const [visibleHotels, setVisibleHotels] = useState([]); // Hotels to display
  const [currentIndex, setCurrentIndex] = useState(0); // Index of the next batch of hotels
  const batchSize = 5; // Number of hotels to display per batch
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch hotels data
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/Vendor/vendors`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        const filteredHotels = result.Data.filter((item) => item.VendorCategory === "Hotel");
        setHotels(filteredHotels);
        setVisibleHotels(filteredHotels.slice(0, batchSize)); // Show the first batch
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  // Scroll navigation
  const handleNav = (direction) => {
    if (direction === "left") {
      if (navRef) {
        navRef.current.scrollLeft -= 100;
      }
    } else {
      if (navRef) {
        navRef.current.scrollLeft += 100;
      }
    }
  };

  // Handle "View More" functionality
  const handleViewMore = () => {
    const nextIndex = currentIndex + batchSize;
    const nextBatch = hotels.slice(nextIndex, nextIndex + batchSize);
    setVisibleHotels((prevVisibleHotels) => [...prevVisibleHotels, ...nextBatch]);
    setCurrentIndex(nextIndex);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div className="container-fluid hotels-fav-container">
        <div className="container">
          <div className="row hotels-fav-row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 hotels-fav-row-tab">
              <div className="col-xl-12 col-lg-12 col-md-12 col-12 hotels-fav-row-tab-inner">
                <div onClick={() => handleNav("left")} className="scroll-arrow scroller-left float-start">
                  <i className="bi bi-chevron-left"></i>
                </div>
                <div onClick={() => handleNav("right")} className="scroll-arrow scroller-right float-end">
                  <i className="bi bi-chevron-right"></i>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-12 scroll-container" ref={navRef}>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-12 scroll-inner-div">
                    <nav className="nav nav-tabs hotels-nav-tabs mt-2" id="myTab" role="tablist">
                      <a className="nav-item nav-link custom-nav-item active" data-bs-toggle="tab" data-bs-target="#tab1" role="tab" aria-controls="public" aria-selected="true">
                        Newest FC Hotels
                      </a>
                    </nav>
                  </div>
                </div>
              </div>

              <div className="tab-content custom-tab-content" id="myTabContent">
                <div role="tabpanel" className="tab-pane fade active show mt-2 " id="tab1" aria-labelledby="public-tab">
                  <div className="row benefits-block-parent benefits-block-parent-favourites">
                    {visibleHotels.map((hotel, index) => (
                      <div key={index} className="hotel-card">
                        <div className="benefit-image-wrapper">
                          <img
                            alt={hotel.VendorName}
                            className="primary-image"
                            src={hotel.VendorImages}
                          />
                        </div>
                        <div className="hotel-details">
                          <h5 style={{ color: "white", fontWeight: "bold" }}>{hotel.VendorName}</h5>
                          <p style={{ fontSize: "12px" }}>{hotel.VendorDescription}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {currentIndex + batchSize < hotels.length && (
                    <div className="row btn-fav-view-more-box ">
                      <button className="btn btn-fav-view-more" onClick={handleViewMore}>
                        View More
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrowseHotelsFavourites;
