/* eslint-disable react-hooks/exhaustive-deps */
import { ArrowRightOutlined } from "@ant-design/icons";
import React, { useContext, useEffect, useState } from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Label
	// Legend
} from "recharts";
import AdvDataTableContext from "../../contexts/Adv-data-table-context/AdvDataTable.provider";
import handleTableRows from "./handleTableRows";

const MiniChart = () => {
	const { advData } = useContext(AdvDataTableContext);

	const [mappedRows, setMappedRows] = useState(null);
	useEffect(() => {
		if (advData?.length > 0) {
			const mappedArr = handleTableRows(advData);
			setMappedRows(mappedArr);
		}
	}, [advData]);

	const [goalTypesArray, setGoalTypesArray] = useState(null);
	useEffect(() => {
		const filteredArr = [];
		if (mappedRows?.length > 0) {
			for (let item of mappedRows) {
				const foundType = item.goalType;
				const typePoints = item.pointsIn;
				if (!filteredArr.find(i => i.goalType === foundType)) {
					filteredArr.push({ goalType: foundType, points_in: typePoints });
				}
			}
			setGoalTypesArray(filteredArr);
		}
	}, [mappedRows]);

	if (!goalTypesArray || goalTypesArray.length === 0) {
		return null;
	}
	return (
		// <ResponsiveContainer width="400px" height="300px">
		<div className="mini-chart-wrap">
			<h2>
				Chart represents each <strong>GOAL TYPE</strong> <ArrowRightOutlined />{" "}
				<strong>Point</strong>
			</h2>
			<BarChart
				width={600}
				height={300}
				data={goalTypesArray}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="goalType" />
				{/* <Label value="Goal type" offset={-8} position="insideBottom" /> */}
				<YAxis>
					<Label value="Points in" angle="-90" position="insideLeft" />
				</YAxis>
				<Tooltip />
				{/* <Legend /> */}
				<Bar dataKey="points_in" fill="#8884d8" />
			</BarChart>
		</div>
		// </ResponsiveContainer>
	);
};

export default MiniChart;
