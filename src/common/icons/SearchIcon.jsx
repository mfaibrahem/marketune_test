import React from "react";

const SearchIcon = ({ fillColor }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="_Trailing_icon_3"
			// data-name="📍Trailing icon 3"
			width="25"
			height="27"
			viewBox="0 0 25 27"
		>
			<rect
				id="Boundary"
				width="25"
				height="25"
				transform="translate(0 0)"
				fill="none"
			/>
			<path
				id="_Color"
				data-name=" ↳Color"
				d="M15.552,17h0l-4.86-4.849v-.768l-.262-.272a6.327,6.327,0,1,1,.681-.681l.272.262h.768L17,15.552,15.553,17ZM6.318,1.944a4.374,4.374,0,1,0,4.374,4.374A4.379,4.379,0,0,0,6.318,1.944Z"
				transform="translate(4 4)"
				fill={fillColor}
			/>
		</svg>
	);
};

export default SearchIcon;
