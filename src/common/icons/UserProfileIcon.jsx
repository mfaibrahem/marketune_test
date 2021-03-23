import React from "react";

const UserProfileIcon = ({ fillColor }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="45.532"
			height="45.53"
			viewBox="0 0 45.532 45.53"
		>
			<g id="profile-user" transform="translate(0 -0.001)">
				<path
					id="Path_223"
					data-name="Path 223"
					d="M22.766,0A22.765,22.765,0,1,0,45.532,22.766,22.766,22.766,0,0,0,22.766,0Zm0,6.807a7.53,7.53,0,1,1-7.529,7.53A7.53,7.53,0,0,1,22.766,6.808Zm-.005,32.771a16.708,16.708,0,0,1-10.88-4.012,3.209,3.209,0,0,1-1.126-2.439,7.594,7.594,0,0,1,7.631-7.592h8.762a7.583,7.583,0,0,1,7.619,7.592,3.2,3.2,0,0,1-1.125,2.438A16.7,16.7,0,0,1,22.761,39.579Z"
					fill={fillColor}
				/>
			</g>
		</svg>
	);
};

export default UserProfileIcon;
