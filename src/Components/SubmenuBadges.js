import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import '../css/submenuBadges.css';


const SubmenuBadges = () => {

	return (
		<>
			<div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 submenu-bedges-container">
				<span class="submenu-bedges-child">
					236 Likes
				</span>
				<OverlayTrigger placement="bottom" overlay={(props) => (
					<Tooltip {...props}>
						Hii, I am a simple tooltip information!!!
					</Tooltip>)}>
					<span class="submenu-bedges-child span-bold">
						$150 Average Savings*
					</span>
				</OverlayTrigger>
				
				<span class="submenu-bedges-child">
					9,661 Redemptions
				</span>
			</div>
			
		</>
		
	);
};

export default SubmenuBadges;
