import React from "react";
import { Link } from "react-router-dom";
import SearchSingleSuggestion from "./SearchSingleSuggestion";
import '../css/browsebycategoryresult.css';
import '../css/searchsinglesuggestion.css';
import "../css/testimonial.css";
const BrowseByCategoryResult = ({sharedState,setSharedState,handlesharedState}) => {
	
	return (
		
		<>
			<div id="categorization-results" className={sharedState ? "col-xxl-9 col-xl-9 col-lg-9 col-md-12 col-12 categorization-results" : "col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12 categorization-results result-fullscreen"}>
				<div className="d-xxl-block d-xl-block d-lg-block d-md-none d-sm-none d-none">
					<div className="row">
						<div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
							<h1 className="result-title">
								<Link to="/#">Travel Benefits</Link>
								: <Link to="/#">Airport Lounges</Link>
							</h1>
						</div>
						<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 select-float-right">
							<select class="select-category-option" >
								<option value="popularity">Sort By: Popularity</option>
								<option value="newest">Sort By: Newest</option>
							</select>
						</div>
					</div>
				</div>
				

				<div className=" result-option-container suggestion-list testimonial-container">
					<div className="test-slider flex">
					<SearchSingleSuggestion></SearchSingleSuggestion>
					<SearchSingleSuggestion></SearchSingleSuggestion>
					<SearchSingleSuggestion></SearchSingleSuggestion>
					<SearchSingleSuggestion></SearchSingleSuggestion>
					<SearchSingleSuggestion></SearchSingleSuggestion>
					<SearchSingleSuggestion></SearchSingleSuggestion>
					<SearchSingleSuggestion></SearchSingleSuggestion>
					<SearchSingleSuggestion></SearchSingleSuggestion>
					</div>
				</div>
			</div>
		</>
	);
};

export default BrowseByCategoryResult;
