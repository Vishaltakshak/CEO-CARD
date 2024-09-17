import React from "react";
//import { useState } from "react";
import { Link } from "react-router-dom";
import '../css/browsebycategorysidebar.css';
const BrowseByCategorySidebar = ({sharedState,setSharedState,handlesharedState}) => {
		
	//use state for toggline sidebar
	// const [isViewsidebar, setViewsidebar] = useState("true");
	// const handleViewdetails = () => {
	// 	setViewsidebar(!isViewsidebar);  
	// };

	return (
		<>
			<div id="categorization-sidebar" className={sharedState ? "col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-12 d-xxl-block d-lg-block d-md-none d-sm-none d-none category-sidebar" : "col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-12 d-xxl-block d-lg-block d-md-none d-sm-none d-none category-sidebar close-sidebar"}>
				<div id="categorization-sidebar-filters" className="categorization-sidebar-filters">

					<div class="subcategory-div ">
						<Link target="/#" className="active">
							Airport Lounges
						</Link>
					</div>

					<div class="subcategory-div">
						<Link target="/#">
							By Our Members
						</Link>
					</div>

					<div class="subcategory-div">
						<Link target="/#">
							Ground transportation
						</Link>
					</div>

					<div class="subcategory-div">
						<Link target="/#">
							Hotel Rewards
						</Link>
					</div>

					<div class="subcategory-div">
						<Link target="/#">
							Loyalty Program Status Upgrades
						</Link>
					</div>

					<div class="subcategory-div">
						<Link target="/#">
							Premium Airlines
						</Link>
					</div>

					<div class="subcategory-div">
						<Link target="/#">
							Premium Services
						</Link>
					</div>


					<div id="brands-section" className="brands-section">
						<h4 className="listbrand-name">brands</h4>
						<div id="brands-list-container" className="brands-list-container">
							<div id="brands-list" className="brands-list">
								{/* repeatative block */}
								<div class="benefit-brand-div active">
									<span class="filter-checkbox"></span>
									<span class="filter-text">Caesars Rewards®</span>
								</div>

								<div class="benefit-brand-div active">
									<span class="filter-checkbox"></span>
									<span class="filter-text"> Hilton Honors™</span>
								</div>

								<div class="benefit-brand-div">
									<span class="filter-checkbox"></span>
									<span class="filter-text">IHG One Rewards</span>
								</div>

								<div class="benefit-brand-div">
									<span class="filter-checkbox"></span>
									<span class="filter-text">Caesars Rewards®</span>
								</div>

								<div class="benefit-brand-div">
									<span class="filter-checkbox"></span>
									<span class="filter-text">Omni Select Guest</span>
								</div>
								{/* repeatative block */}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="d-xxl-block d-lg-block d-md-none d-sm-none d-none">
				<div  onClick={handlesharedState} id="sidebar-close" class="sidebar-open-close" >
					<i className={sharedState ? "bi bi-chevron-left sidebar-arrow" : "bi bi-chevron-right sidebar-arrow"}></i>
				</div>
			</div>
		</>
	);
};

export default BrowseByCategorySidebar;
