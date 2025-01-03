import React from "react";
import AfterLoginLayout from "./layouts/AfterLoginLayout";
import SearchLocationTopbanner from "./SearchLocationTopbanner";
import ScrollTotop from "./ScrollTotop";
import SearchLocationList from "./SearchLocationList";
import SearchSuggestionList from "./SearchSuggestionList";

const SearchLocation = () => {
	return (
		
		<>
			<AfterLoginLayout>
			<SearchLocationTopbanner></SearchLocationTopbanner>
			<SearchLocationList></SearchLocationList>
			<SearchSuggestionList></SearchSuggestionList>
			<ScrollTotop></ScrollTotop>
			</AfterLoginLayout>
		</>
	);
};

export default SearchLocation;
