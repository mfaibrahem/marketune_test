import React, { createContext, useState } from "react";

const INITIAL_STATE = {
	advData: null,
	setAdvData: data => {}
};

const AdvDataTableContext = createContext(INITIAL_STATE);

export const AdvDataTableProvider = ({ children }) => {
	const [advData, setAdvData] = useState(INITIAL_STATE.advData);
	return (
		<AdvDataTableContext.Provider
			value={{
				advData,
				setAdvData
			}}
		>
			{children}
		</AdvDataTableContext.Provider>
	);
};

export default AdvDataTableContext;
