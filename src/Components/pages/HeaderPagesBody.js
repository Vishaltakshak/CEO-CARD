import React from "react";
import '../../css/pages/headerpagesbody.css';

const HeaderPagesBody = (props) => {
	return (
		<>
			<div className="container-fluid top-background headerpages-container"
			 style={{ backgroundImage: `url(${props.BGImage})` }}>
				<div className="container">
					<div className="row d-flex justify-content-center">
						{props.children}
					</div>
				</div>
			</div>
		</>
		
	);
};

export default HeaderPagesBody;
