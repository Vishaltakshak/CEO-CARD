import React from "react";
import '../css/home.css';

const MembershipImage = ({membershipimg}) => {
	return (
		<>
			<div className="<MembershipImage membershipimg={Image}></MembershipImage>">
				<div className="membeship-image" style={{ backgroundImage: `url(${membershipimg})` }}></div>
				{/* <img className='img-fluid membeship-image' src={membershipimg}  alt='Membership'></img> */}
			</div>
		</>
		
	);
};

export default MembershipImage;