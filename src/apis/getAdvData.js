import axios from "axios";

const getAdvData = async () => {
	const res = await axios.get("/getData");
	try {
		if (res.status === 200 && res.data) {
			return res.data;
		}
	} catch (e) {
		console.log(e);
	}
};

export default getAdvData;
