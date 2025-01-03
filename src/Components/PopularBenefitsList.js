import React, { useState, useEffect } from "react";
import '../css/memberbenefits.css';
const PopularBenefitsList = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/Vendor/vendors`);
				if (!response.ok) {
					throw new Error('Failed to fetch data');
				}
				console.log("response is",response)
				const result = await response.json();
			
				// const Hotels = await result.Data.filter(item=>item.VendorCategory==='Travel')
				// console.log("result is", Hotels);
				
				
				setData(result.Data)
				
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);
	return (
		<>
			<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-2 member-benefit-block-popular flex " >
				{data.map((datab, i) => (
					<div >
						<a href="/SubMenu">
							<div className="benefit-image-wrapper">
								
								<img  alt={datab.ContentTitle} className="primary-image" src={datab.VendorImages}></img>

							</div>
						</a>
						<div>

							<div className="benefit-title-container col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6" style={{width:"100%"}} key={i}>
								<a href="/SubMenu" class="link-no-underline">
									<h5 style={{color:"white", fontWeight:"bold"}} className="no-translation">{datab.VendorName}</h5>
								</a>
							</div>
							<div className="benefit-description-container col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6" style={{overflow:"hidden", fontSize:"12px", maxHeight:"60px", width:"100%"}}>
								{datab.VendorDescription}
							</div>
						</div >
					</div>
				))}
			</div>
		</>
	);
};

export default PopularBenefitsList;
