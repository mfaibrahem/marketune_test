import React from "react";

const CurrentPageTable = () => {
	return (
		<div className="current-page-table">
			<div className="custom-table-row head-row">
				<span className="custom-cell">Current Page</span>
				<span className="custom-cell">Opened Ads</span>
				<span className="custom-cell">Retained Ads</span>
				<span className="custom-cell">Totoal Ads</span>
				<span className="custom-cell">Total Pages</span>
				<span className="custom-cell">Status</span>
			</div>
			{/* custom table data */}
			<div className="custom-table-row content-row">
				<span className="custom-cell">1</span>
				<span className="custom-cell">29</span>
				<span className="custom-cell">29</span>
				<span className="custom-cell">1324534</span>
				<span className="custom-cell">948357</span>
				<span className="custom-cell">Extracting Current advert date</span>
			</div>
		</div>
	);
};

export default CurrentPageTable;
