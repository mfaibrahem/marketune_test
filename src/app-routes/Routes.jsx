import React, { lazy } from "react";
import { Route, Switch } from "react-router";
import NotFoundPage from "../pages/not-found-page/NotFoundPage";
import routerLinks from "./routerLinks";
const HomePage = lazy(() => import("../pages/home-page/HomePage"));

const Routes = () => {
	return (
		<Switch>
			<Route exact path={routerLinks.homePage}>
				<HomePage />
			</Route>

			{/* not found page */}
			<Route path="*" component={NotFoundPage} />
		</Switch>
	);
};

export default Routes;
