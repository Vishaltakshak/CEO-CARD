import React from "react";
import { Link } from "react-router-dom";
import '../css/home.css';


const HomeButton = ({buttontext}) => {
	return (
		<>
			{/* <button type="button" className="btn btn-custombutton">{buttontext}</button> */}
			<button className="btn btn-custombutton"><Link to='/enquiry' >{buttontext}</Link></button>
		</>
		
	);
};

export default HomeButton;
