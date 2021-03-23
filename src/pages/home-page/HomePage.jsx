/* eslint-disable react-hooks/exhaustive-deps */
import "./HomePage.scss";
import React, { useEffect } from "react";
import AdvDataTable from "../../components/adv-data-table/AdvDataTable";
import getAdvData from "../../apis/getAdvData";

const HomePage = () => {
	useEffect(() => {
		getAdvData();
	}, []);

	return (
		<div className="home-page-wrap">
			<div className="mfa-container">
				<h1>Home page</h1>
				<AdvDataTable />
			</div>
		</div>
	);
};

export default HomePage;
