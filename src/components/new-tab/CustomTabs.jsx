import React, { useContext } from "react";
import { Tooltip } from "antd";
import NewTabContext from "../../contexts/new-tab-context/NewTabProvider";
import { useHistory } from "react-router";

const CustomTabs = ({ tabs }) => {
	// get the history object
	const history = useHistory();
	const {
		setNewTabModalOpened,
		selectedNewTab,
		setNewTabNameEmpty,
		selectNewTab,
		removeNewTab,
		newTabs
	} = useContext(NewTabContext);
	// hanlde double click on tab
	const handleDoubleTabClick = e => {
		e.stopPropagation();
		setNewTabModalOpened(true);
		setNewTabNameEmpty(false);
	};

	// handle click on tab
	const handleTabClick = (tabId, e) => {
		e.stopPropagation();
		selectNewTab(tabId);
		history.push(`/new-tab/${tabId}`);
	};

	// handle close new tab
	const handleCloseNewTab = (tabId, e) => {
		e.stopPropagation();
		removeNewTab(tabId);
		if (selectedNewTab.tabId === tabId && newTabs.length > 0) {
			selectNewTab(newTabs[0].tabId);
			history.push(`/new-tab/${newTabs[0].tabId}`);
		}
	};

	const renderTab = tab => {
		const { tabId, tabName } = tab;
		return (
			<Tooltip key={tabId} placement="bottom" title={tabName}>
				<div
					className={`custom-tab ${
						selectedNewTab?.tabId === tabId ? "selected" : ""
					}`}
					onDoubleClick={e => handleDoubleTabClick(e)}
					onClick={e => handleTabClick(tabId, e)}
				>
					{tabName}
					<div className="close-btn" onClick={e => handleCloseNewTab(tabId, e)}>
						<span></span>
						<span></span>
					</div>
				</div>
			</Tooltip>
		);
	};

	return <div className="custom-tabs">{tabs.map(tab => renderTab(tab))}</div>;
};

export default CustomTabs;
