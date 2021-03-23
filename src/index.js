import "antd/dist/antd.css";
import "./scss/index.scss";

import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import customHistory from "./history";
import App from "./components/app/App";
import { AdvDataTableProvider } from "./contexts/Adv-data-table-context/AdvDataTable.provider";

const rootEl = document.getElementById("root");

let render = () => {
	ReactDOM.render(
		// react router dom
		<Router history={customHistory}>
			<AdvDataTableProvider>
				{/* <React.StrictMode> */}
				<App />
				{/* </React.StrictMode> */}
			</AdvDataTableProvider>
		</Router>,
		rootEl
	);
};

render();
