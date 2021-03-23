import "./MainDataTable.scss";
import React from "react";
import TableData from "./TableData";
import TableHeader from "./TableHeader";

const MainDataTable = () => {
	return (
		<div className="main-data-table">
			<TableHeader />
			<TableData />
		</div>
	);
};

export default MainDataTable;
