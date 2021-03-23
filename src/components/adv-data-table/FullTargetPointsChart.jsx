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
const FullTargetPointsChart = () => {
	const {
		advData,
		goalTypesArr,
		setGoalTypesArr,
		tableRows,
		setTableRows
	} = useContext(AdvDataTableContext);

	// const [mappedRows, setMappedRows] = useState(null);

	useEffect(() => {
		if (advData?.length > 0) {
			const mappedArr = handleTableRows(advData);
			setTableRows(mappedArr);
		}
	}, [advData]);

	useEffect(() => {
		const filteredArr = [];
		if (tableRows?.length >= 0) {
			for (let item of tableRows) {
				const foundType = item.goalType;
				const typePoints = item.pointsIn;
				if (!filteredArr.find(i => i.goalType === foundType)) {
					filteredArr.push({ goalType: foundType, points_in: typePoints });
				}
			}
			setGoalTypesArr(filteredArr);
		}
	}, [tableRows]);

	const [totalGoalsArr, setTotalGoalArr] = useState(null);
	useEffect(() => {
		if (goalTypesArr?.length >= 0) {
			// clone old goal types arr
			const mappedTypesArr = goalTypesArr.map(g => ({ ...g, points_in: 0 }));
			// find matched goal
			// add on the points_in of the found goal
			for (let advRow of tableRows) {
				const foundTypeObj = mappedTypesArr.find(
					t => t.goalType === advRow.goalType
				);
				if (foundTypeObj && !isNaN(advRow.pointsIn)) {
					foundTypeObj.points_in += advRow.pointsIn;
				}
			}
			// console.log("mappedTypesArr: ", mappedTypesArr);
			setTotalGoalArr(mappedTypesArr);
		}
	}, [goalTypesArr]);

	if (!totalGoalsArr || totalGoalsArr.length === 0) {
		return null;
	}
	return (
		// <ResponsiveContainer width="400px" height="300px">
		<div className="full-chart-wrap">
			<h2>
				Chart represents each <strong>GOAL TYPE</strong> <ArrowRightOutlined />{" "}
				<strong>Total Collected Points</strong> in all the 3000 Advertisements
			</h2>
			<BarChart
				width={600}
				height={300}
				data={totalGoalsArr}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="goalType">
					{/* <Label value="Goal type" offset={-8} position="insideBottom" /> */}
				</XAxis>
				<YAxis>
					<Label value="Points in" angle="-90" position="insideLeft" />
				</YAxis>
				<Tooltip />
				{/* <Legend /> */}
				<Bar dataKey="points_in" fill="#107fe7" />
			</BarChart>
		</div>
		// </ResponsiveContainer>
	);
};

export default FullTargetPointsChart;
