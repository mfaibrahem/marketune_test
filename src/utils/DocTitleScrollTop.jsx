import { useEffect } from "react";

const DocTitleScrollTop = docTitle => {
	return useEffect(() => {
		window.scrollTo(0, 0);
		document.title = `${docTitle ? `${docTitle} |` : ""} ${
			process.env.REACT_APP_TITLE
		}`;

		return () => {
			document.title = process.env.REACT_APP_TITLE;
		};
	}, [docTitle]);
};

export default DocTitleScrollTop;
