/* eslint-disable react-hooks/exhaustive-deps */
import "./NewTab.scss";
import React, { useContext, useEffect, useState } from "react";
import MainSearchFrom from "./MainSearchFrom";
import CurrentPageTable from "./CurrentPageTable";
import MainDataTable from "./main-data-table/MainDataTable";
import CustomTabs from "./CustomTabs";
import NewTabContext from "../../contexts/new-tab-context/NewTabProvider";
import { useParams } from "react-router";
import NotFoundPage from "../../pages/not-found-page/NotFoundPage";

const NewTab = () => {
	const { newTabs } = useContext(NewTabContext);
	const [validUrl, setValidUrl] = useState(false);
	const { tabId } = useParams();
	useEffect(() => {
		const foundTab = newTabs.find(t => t.tabId === tabId);
		if (foundTab) {
			setValidUrl(true);
		} else {
			setValidUrl(false);
		}
	}, [tabId, newTabs]);
	if (validUrl) {
		return (
			<div className="new-tab-page">
				<CustomTabs tabs={newTabs} />
				<MainSearchFrom />
				<CurrentPageTable />
				<MainDataTable />
			</div>
		);
	} else {
		return <NotFoundPage />;
	}
};

export default NewTab;
