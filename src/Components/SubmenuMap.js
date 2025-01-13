import React from "react";


const SubmenuMap = ({service}) => {
	const mapUrl = service.MapUrl;
	console.log(mapUrl);

	return (
		<>
			<div className="conatiner-fluid pe-0 ps-0">
				<h2 className="sub-menu-map-heading">API INTEGRATION REQUIRED</h2>
				{mapUrl?(
					<iframe src={mapUrl} width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
				):(
					<p>...loading</p>
				)}
				{/* <a  href="https://maps.google.com?q=60+Tucker%27s+Point+Dr.+Hamilton+Parish+HS02+Bermuda">
					<img style={{width:"100%"}} alt="map" src="https://maps.googleapis.com/maps/api/staticmap?center=60+Tucker%2527s+Point+Dr.+Hamilton+Parish+HS02+Bermuda&amp;zoom=15&amp;size=640x180&amp;scale=2&amp;markers=size:mid%7C60+Tucker%2527s+Point+Dr.+Hamilton+Parish+HS02+Bermuda&amp;sensor=false&amp;key=AIzaSyBX6a6cBRBm2xqSNHd9GBDI7ylSH7ZGpOg&amp;signature=qszTFSgYjUPX-YKQtBzKsWEhfU8="></img>
				</a> */}
			</div>
		</>
		
	);
};

export default SubmenuMap;
