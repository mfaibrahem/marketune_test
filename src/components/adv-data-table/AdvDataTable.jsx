/* eslint-disable react-hooks/exhaustive-deps */
import "./AdvDataTable.scss";

import React, { useContext, useEffect } from "react";
import { Alert, Button, DatePicker, Form, Table } from "antd";
import { SearchOutlined, SyncOutlined } from "@ant-design/icons";
import AdvDataTableContext from "../../contexts/Adv-data-table-context/AdvDataTable.provider";
import ContentLoader from "react-content-loader";
import tableColumns from "./tableColumns";
import handleTableRows from "./handleTableRows";
import MiniChart from "./MiniChart";
import FullTargetPointsChart from "./FullTargetPointsChart";

const AdvDataTable = () => {
	const {
		loadingAdvData,
		errorAdvData,
		advData,
		tableRows,
		setTableRows
	} = useContext(AdvDataTableContext);
	// console.log(advData);

	// const [tableRows, setTableRows] = useState(null);

	useEffect(() => {
		if (advData?.length > 0) {
			const rowsArr = handleTableRows(advData);
			setTableRows(rowsArr);
		}
	}, [advData]);

	if (loadingAdvData) {
		return (
			<div className="loading-table-wrap">
				<ContentLoader
					width="100%"
					height="100%"
					speed={1}
					backgroundColor="#e5e5e5"
					foregroundColor="#eee"
				>
					<rect x="0" y="0" width="100%" height="100%" rx="2" ry="2" />
				</ContentLoader>
			</div>
		);
	}

	if (errorAdvData) {
		return (
			<Alert
				message="Error"
				description="There was a problem loading your data!!!"
				type="error"
				showIcon
			/>
		);
	}

	const config = {
		rules: [
			{
				type: "object",
				required: true,
				message: "Please select the date!"
			}
		]
	};

	const onFinishFailed = fieldsValue => {
		const values = { ...fieldsValue };
		if (!values["date-picker"]) {
			const rowsArr = handleTableRows(advData);
			setTableRows(rowsArr);
		}
	};

	const onFinish = fieldsValue => {
		const values = {
			...fieldsValue,
			"date-picker": fieldsValue["date-picker"].format("MM,DD,YYYY")
		};
		// console.log("Received values of form: ", values);

		if (values["date-picker"]) {
			// filter advDataArray by adv createdAt
			const filtered = advData.filter(item => {
				const foundItem = new Date(item.createdAt).toDateString();
				return (
					new Date(foundItem).toISOString() ===
					new Date(values["date-picker"]).toISOString()
				);
			});

			const mappedFiltered = handleTableRows(filtered);
			setTableRows(mappedFiltered);
		}
	};

	return (
		<div className="adv-section-wrap">
			<MiniChart />
			<br />
			<FullTargetPointsChart />
			<Form
				name="time_related_controls"
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				className="filter-form"
			>
				<Form.Item
					name="date-picker"
					// label="Filter By advertisement date"
					{...config}
				>
					<DatePicker format="DD-MM-YYYY" />
				</Form.Item>

				<Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
					Find
				</Button>
				<Button
					type="primary"
					onClick={() => setTableRows(handleTableRows(advData))}
					icon={<SyncOutlined />}
					style={{ marginLeft: "auto" }}
				>
					Reset
				</Button>
			</Form>

			<Table
				scroll={{ x: "max-content" }}
				dataSource={tableRows}
				columns={tableColumns}
			/>
		</div>
	);
};

export default AdvDataTable;
