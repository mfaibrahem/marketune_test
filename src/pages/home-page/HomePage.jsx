/* eslint-disable react-hooks/exhaustive-deps */
import "./HomePage.scss";
import React, { useContext, useEffect } from "react";
import { notification } from "antd";
import AdvDataTable from "../../components/adv-data-table/AdvDataTable";
import getAdvData from "../../apis/getAdvData";
import AdvDataTableContext from "../../contexts/Adv-data-table-context/AdvDataTable.provider";

const HomePage = () => {
	const { setLoadingAdvData, setErrorAdvData, setAdvData } = useContext(
		AdvDataTableContext
	);

	useEffect(() => {
		const getData = async () => {
			try {
				setLoadingAdvData(true);
				const data = await getAdvData();
				if (data) {
					setAdvData(data);
					setLoadingAdvData(false);
				} else {
					setErrorAdvData(true);
					setLoadingAdvData(false);
				}
			} catch (error) {
				setErrorAdvData(true);
				setLoadingAdvData(false);
				notification["error"]({
					message: "Something went wrong!!!",
					description: "Please try again later"
				});
			}
		};
		getData();
	}, []);

	return (
		<div className="home-page-wrap">
			<div className="mfa-container">
				<AdvDataTable />
			</div>
		</div>
	);
};

export default HomePage;
