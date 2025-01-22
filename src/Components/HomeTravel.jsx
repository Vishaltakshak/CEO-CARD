import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/memberbenefits.css';
const HomeTravel = () => {
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
            
                const Hotels = await result.Data.filter(item=>item.VendorCategory==='Travel')
                console.log("result is", Hotels);
                
                
                setData(Hotels)
                
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
        <div className="container-fluid benefits-block-parent benefits-block-parent-white scrollBar overflow-x-auto" >
				<div className="container pe-0 ps-0">
					
						<h1 className="text-center text-[20px] font-bold">TRAVEL PARTNERS</h1>
					<div className="  flex   ">
						<div className=" flex scroll-inner-div-6-benefits duration-1000 test-slider ">
							
                        <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-2 !gap-20 md:gap-4 member-benefit-block-popular flex bg-black" >
                {data.map((datab, i) => (
                    <Link to='/ServiceInfo' state={{datab}}>
                    <div className="w-[60vw] md:w-[300px] h-[200px]">
                        <a href="/SubMenu">
                            <div className="benefit-image-wrapper h-[200px] w-[300px]">
                                
                                <img  alt={datab.ContentTitle} className="primary-image h-[200px] !w-[94%] md:w-[300px]" src={datab.VendorImages}></img>

                            </div>
                        </a>
                        <div>

                            <div className="benefit-title-container col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6" style={{width:"100%"}} key={i}>
                                <a href="/SubMenu" class="link-no-underline">
                                    <h5 style={{color:"white", fontWeight:"bold"}} className="no-translation">{datab.VendorName}</h5>
                                </a>
                            </div>
                            <div className="benefit-description-container col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6 text-white" style={{overflow:"hidden", fontSize:"12px", maxHeight:"60px", width:"100%"}}>
                                {datab.VendorDescription}
                            </div>
                        </div >
                    </div>
                    </Link>
                ))}
            </div>
						</div>
					</div>
				</div>
			</div>
           
        </>
    );
};

export default HomeTravel;
