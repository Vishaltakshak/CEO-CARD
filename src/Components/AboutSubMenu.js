import React from "react";
import SubmenuPageHeading from "./SubmenuPageHeading";
import SubmenuBadges from "./SubmenuBadges";
import '../css/aboutsubmenu.css';


const AboutSubMenu = ({service}) => {
	return (
		<>
			<div className="container-fluid submenu-container about-submenu">
				<div className="container pe-0 ps-0">
					<div className="row">
						<div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
							<SubmenuBadges></SubmenuBadges>
							<SubmenuPageHeading mobhidetitle="mob-title-hidden" submenupagetopic={service.contentTitle} submenupagesubtopic="" ></SubmenuPageHeading>
							<br></br>
							<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 about-submenu-desc">
								<div className="row">
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" style={{height:"auto"}}>
										<p>{service.contentDescription}</p>
									</div>
									<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
										<br></br>
										<br></br>
										<br></br>
										<br></br>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
										
						</div>
					</div>
				</div>
			</div>
			
		</>
		
	);
};

export default AboutSubMenu;
