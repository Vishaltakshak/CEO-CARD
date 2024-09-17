import React from "react";
import '../css/home.css';

const MembershipImage = ({membershipimg}) => {
	return (
		<>
			<div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 membership-img-child order-xxl-2 order-lg-2  order-md-1  order-sm-1 order-1">
				<div className="membeship-image" style={{ backgroundImage: `url(${membershipimg})` }}></div>
				{/* <img className='img-fluid membeship-image' src={membershipimg}  alt='Membership'></img> */}
			</div>
		</>
		
	);
};

export default MembershipImage;
