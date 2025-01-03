import React from "react";
import '../css/submenupageheading.css';


const SubmenuPageHeading = ({submenupagetopic, submenupagesubtopic, mobhidetitle}) => {
	return (
		<>
			<div className={`col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ${mobhidetitle}`}>
				<h1 className="submenu-page-heading">{submenupagetopic}</h1>
			</div>
			
		</>
		
	);
};

export default SubmenuPageHeading;
