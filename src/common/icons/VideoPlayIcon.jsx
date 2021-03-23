import React from "react";

const VideoPlayIcon = ({ fillColor }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			id="video-play-button"
			width="24.667"
			height="24.667"
			viewBox="0 0 24.667 24.667"
		>
			<g id="Group_3" data-name="Group 3">
				<path
					id="Path_12"
					data-name="Path 12"
					d="M12.333,24.667A12.333,12.333,0,1,0,0,12.333,12.333,12.333,0,0,0,12.333,24.667Zm10.36-12.333a10.36,10.36,0,1,1-10.36-10.36A10.372,10.372,0,0,1,22.693,12.333Z"
					fill={fillColor}
				/>
				<path
					id="Path_13"
					data-name="Path 13"
					d="M100.238,77.944a1.933,1.933,0,0,0,.747.15,1.962,1.962,0,0,0,1.392-.578l4.438-4.44a1.973,1.973,0,0,0,0-2.791l-4.44-4.44a1.974,1.974,0,0,0-1.4-.578,1.9,1.9,0,0,0-.739.15,1.959,1.959,0,0,0-1.2,1.823v8.88A1.959,1.959,0,0,0,100.238,77.944Zm.771-10.559V67.24l4.44,4.44-4.44,4.44Z"
					transform="translate(-90.052 -59.347)"
					fill={fillColor}
				/>
			</g>
		</svg>
	);
};

export default VideoPlayIcon;
