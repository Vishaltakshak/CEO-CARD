import React from "react";
import { Link } from "react-router-dom";
import '../css/searchlocationlist.css';


const SearchLocationList = () => {

	return (
		<>
			<div className="container-fluid search-location-list">
				<div className="container pe-0 ps-0">
					{/* repate block */}
					<div className="search-location-list-box pe-0 ps-0">
						<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
							<h1 className="browse-location-heading">Browse by Location</h1>
							<hr class="custom-section-break"></hr>
						</div>
						<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 location-list">
							<div className="row">
								<div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
									<Link to="/#" target="_blank">
										<h6 className="location-title">NORTH AMERICA</h6>
									</Link>
									<div className="location-list-container">
										<ul>
											<li>
												<Link to="/#" target="_blank">
													chikago
												</Link>
											</li>
											<li>
												<Link to="/#" target="_blank">
													chikanew yorkgo
												</Link>
											</li>
											<li>
												<Link to="/#" target="_blank">
													toronto
												</Link>
											</li>
											<li>
												<Link to="/#" target="_blank">
													us
												</Link>
											</li>
										</ul>
									</div>
								</div>

								<div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
									<Link to="/#" target="_blank">
										<h6 className="location-title">NORTH AMERICA</h6>
									</Link>
									<div className="location-list-container">
										<ul>
											<li>
												<Link to="/#" target="_blank">
													chikago
												</Link>
											</li>
											<li>
												<Link to="/#" target="_blank">
													chikanew yorkgo
												</Link>
											</li>
											<li>
												<Link to="/#" target="_blank">
													toronto
												</Link>
											</li>
											<li>
												<Link to="/#" target="_blank">
													us
												</Link>
											</li>
										</ul>
									</div>
								</div>


								<div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
									<Link to="/#" target="_blank">
										<h6 className="location-title">NORTH AMERICA</h6>
									</Link>
									<div className="location-list-container">
										<ul>
											<li>
												<Link to="/#" target="_blank">
													chikago
												</Link>
											</li>
											<li>
												<Link to="/#" target="_blank">
													chikanew yorkgo
												</Link>
											</li>
											<li>
												<Link to="/#" target="_blank">
													toronto
												</Link>
											</li>
											<li>
												<Link to="/#" target="_blank">
													chikanew yorkgo
												</Link>
											</li>
											<li>
												<Link to="/#" target="_blank">
													toronto
												</Link>
											</li>
											<li>
												<Link to="/#" target="_blank">
													us
												</Link>
											</li>
										</ul>
									</div>
								</div>


								<div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
									<Link to="/#" target="_blank">
										<h6 className="location-title">NORTH AMERICA</h6>
									</Link>
									<div className="location-list-container">
										<ul>
											<li>
												<Link to="/#" target="_blank">
													chikago
												</Link>
											</li>
											<li>
												<Link to="/#" target="_blank">
													chikanew yorkgo
												</Link>
											</li>
											<li>
												<Link to="/#" target="_blank">
													toronto
												</Link>
											</li>
											<li>
												<Link to="/#" target="_blank">
													us
												</Link>
											</li>
											<li>
												<Link to="/#" target="_blank">
													view all
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* repate block */}


					{/* repate block */}
					<div className="search-location-list-box pe-0 ps-0">
						<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
							<h1 className="browse-location-heading">Browse by Popularity</h1>
							<hr class="custom-section-break"></hr>
						</div>
						<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 location-list">
							<div className="row">
								<div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
									<Link to="/#" target="_blank">
										<h6 className="location-title">NORTH AMERICA</h6>
									</Link>
									<div className="location-list-container">
										<ul>
											<li>
												<Link to="/#" target="_blank">
													chikago
												</Link>
											</li>
											<li>
												<Link to="/#" target="_blank">
													chikanew yorkgo
												</Link>
											</li>
											<li>
												<Link to="/#" target="_blank">
													toronto
												</Link>
											</li>
											<li>
												<Link to="/#" target="_blank">
													us
												</Link>
											</li>
										</ul>
									</div>
								</div>

								<div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
									<Link to="/#" target="_blank">
										<h6 className="location-title">NORTH AMERICA</h6>
									</Link>
									<div className="location-list-container">
										<ul>
											<li>
												<Link to="/#" target="_blank">
													chikago
												</Link>
											</li>
											<li>
												<Link to="/#" target="_blank">
													chikanew yorkgo
												</Link>
											</li>
											<li>
												<Link to="/#" target="_blank">
													toronto
												</Link>
											</li>
											<li>
												<Link to="/#" target="_blank">
													chikanew yorkgo
												</Link>
											</li>
											<li>
												<Link to="/#" target="_blank">
													toronto
												</Link>
											</li>
											<li>
												<Link to="/#" target="_blank">
													us
												</Link>
											</li>
										</ul>
									</div>
								</div>

							</div>
						</div>
					</div>
					{/* repate block */}
				</div>
			</div>
		</>
		
	);
};

export default SearchLocationList;
