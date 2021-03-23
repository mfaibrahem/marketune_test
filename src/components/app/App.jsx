import React, { Suspense } from "react";
import ReactDOM from "react-dom";
// import { MainAppBarProvider } from "../../contexts/main-app-bar-context/MainAppBarProvider";
import Loading from "../../common/loading/Loading";
import Routes from "../../app-routes/Routes";
import Layout from "../layout/Layout";
import ReactNotification from "react-notifications-component";
import axios from "axios";

axios.defaults.baseURL = "https://marketune-visualization-test.herokuapp.com";

const renderNotifications = () =>
	ReactDOM.createPortal(
		<ReactNotification />,
		document.querySelector("#custom-notification")
	);

function App() {
	return (
		<div className="app">
			<Suspense fallback={<Loading />}>
				<Layout>
					<Routes />
				</Layout>
			</Suspense>

			{renderNotifications()}
		</div>
	);
}

export default App;
