import { nanoid } from "nanoid";

const handleTableRows = arr => {
	return arr?.map(item => {
		if (item?.goal) {
			return {
				// key: item.createdAt,
				key: nanoid(),
				userId: item.userid,
				corpId: item.corpid || "----",
				goalType: item.goal.goal_type,
				pointsIn: item.goal.points_in,
				pointsOut: item.goal.points_out,
				status: item.status,
				createdAt: new Date(item.createdAt).toLocaleDateString("us-en", {
					day: "numeric",
					month: "long",
					year: "numeric"
				})
			};
		}
		return {
			// key: item.createdAt,
			key: nanoid(),
			userId: item.userid,
			corpId: item.corpid || "----",
			goalType: item.goal_type,
			pointsIn: item.points_in,
			pointsOut: item.points_out,
			status: item.status,
			createdAt: new Date(item.createdAt).toLocaleDateString("us-en", {
				day: "numeric",
				month: "long",
				year: "numeric"
			})
		};
	});
};

export default handleTableRows;
