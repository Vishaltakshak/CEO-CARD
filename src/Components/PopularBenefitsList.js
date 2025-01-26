
import React, { useState, useEffect } from "react";
import '../css/memberbenefits.css';
import { Link } from "react-router-dom";
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
			<div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-2 !gap-[20]  mt:0 md:gap[1rem] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  w-full overflow-y-auto " >
				{data.map((datab, i) => (
					<div className="w-[44vw] md:w-[16vw] mb-[2rem]">
						<Link to='/ServiceInfo' state={{datab}}>
							<div className="benefit-image-wrapper  w-[44vw] md:w-[16vw]">
								
								<img  alt={datab.ContentTitle} className="primary-image h-[165px] !w-[100%] md:w-[300px]" src={datab.VendorImages}></img>

							</div>
						
							<div>
					
								<div className="benefit-title-container col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6" style={{width:"100%"}} key={i}>
									<a href="/SubMenu" class="link-no-underline">
										<h5 style={{color:"white", fontWeight:"bold"}} className="no-translation">{datab.VendorName}</h5>
									</a>
								</div>
								<div className="benefit-description-container col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 line-clamp-3 text-white" style={{overflow:"hidden", fontSize:"12px",  width:"70%"}}>
									{datab.VendorDescription}
								</div>
							</div >
						</Link>
					</div>
				))}
			</div>
		</>
	);
};

export default PopularBenefitsList;