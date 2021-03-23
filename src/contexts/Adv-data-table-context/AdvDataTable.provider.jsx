import React, { createContext, useState } from "react";

const INITIAL_STATE = {
	loadingAdvData: false,
	setLoadingAdvData: loading => {},
	errorAdvData: false,
	setErrorAdvData: err => {},
	advData: null,
	setAdvData: data => {},
	tableRows: null,
	setTableRows: row => {},
	goalTypesArr: null,
	setGoalTypesArr: arr => {}
};

const AdvDataTableContext = createContext(INITIAL_STATE);

export const AdvDataTableProvider = ({ children }) => {
	const [advData, setAdvData] = useState(INITIAL_STATE.advData);
	const [loadingAdvData, setLoadingAdvData] = useState(
		INITIAL_STATE.loadingAdvData
	);
	const [errorAdvData, setErrorAdvData] = useState(INITIAL_STATE.errorAdvData);
	const [goalTypesArr, setGoalTypesArr] = useState(INITIAL_STATE.goalTypesArr);
	const [tableRows, setTableRows] = useState(INITIAL_STATE.tableRows);
	return (
		<AdvDataTableContext.Provider
			value={{
				loadingAdvData,
				setLoadingAdvData,
				errorAdvData,
				setErrorAdvData,
				advData,
				setAdvData,
				tableRows,
				setTableRows,
				goalTypesArr,
				setGoalTypesArr
			}}
		>
			{children}
		</AdvDataTableContext.Provider>
	);
};

export default AdvDataTableContext;
