import React from "react";
import '../../css/footerpagesbody.css';

const PagesBody = (props) => {
	return (
		<>
			<div className="container-fluid footerpages-container top-spacing" style={{minHeight: props.BGHEIGHT}}>
				<div className="container footerPageCareerHeight">
					<div className="row d-flex justify-content-center">
						{props.children}
					</div>
				</div>
			</div>
		</>
		
	);
};

export default PagesBody;
