import "./NotFound.styles.scss";

import React from "react";
import { Link as RouterLink } from "react-router-dom";
import DocTitleScrollTop from "../../utils/DocTitleScrollTop";

const NotFoundPage = () => {
	DocTitleScrollTop("Notfound");

	return (
		<div className="notFoundPage">
			<div className="mfa-container">
				<div className="notFoundContent">
					<h3>Whoops, we cannot find that page.</h3>
					<h5>
						You can always visit{" "}
						<RouterLink to="/" color="primary">
							homepage
						</RouterLink>{" "}
						to get a fresh start.
					</h5>
				</div>
			</div>
		</div>
	);
};

export default NotFoundPage;
