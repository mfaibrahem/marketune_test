import React, { useRef, useState } from "react";
import { Button, Input, Slider, Space, Table } from "antd";
import { myTableCloumnsArr, myTableDataArr } from "./myTabelData";
import { FilterFilled, SearchOutlined } from "@ant-design/icons";

const TableData = () => {
	const rowSelection = {
		onChange: (selectedRowKeys, selectedRows) => {
			console.log(
				`selectedRowKeys: ${selectedRowKeys}`,
				"selectedRows: ",
				selectedRows
			);
		}
		// getCheckboxProps: record => ({
		// 	disabled: record.name === "Disabled User",
		// 	// Column configuration not to be checked
		// 	name: record.name
		// })
	};
	function onTableChange(pagination, filters, sorter, extra) {
		console.log("params", pagination, filters, sorter, extra);
	}

	// handle price range slider
	const [filteredPrice, setFilteredPrice] = useState("");
	const [filteredColumn, setFilteredColumn] = useState("");
	// let searchInput;

	function onRangeSliderChange(value) {
		console.log("onChange: ", value);
	}

	function onRangeSliderAfterChange(value) {
		console.log("onAfterChange: ", value);
	}

	const getColumnSearchProps = dataIndex => ({
		filterDropdown: ({
			setSelectedKeys,
			selectedKeys,
			confirm,
			clearFilters
		}) => (
			<div style={{ padding: 8 }}>
				<Slider
					range
					step={10}
					min={0}
					max={1000}
					defaultValue={[100, 200]}
					onAfterChange={value => {
						let max = value[0];
						let min = value[1];
						if (value[1] > value[0]) {
							max = value[1];
							min = value[0];
						}
						setSelectedKeys([{ min, max }]);
						// setSelectedKeys(e.target.value ? [e.target.value] : [])
					}}
					// onChange={value => {
					// let max = value[0];
					// let min = value[1];
					// if (value[1] > value[0]) {
					// 	max = value[1];
					// 	min = value[0];
					// }
					// setSelectedKeys([{ min, max }]);
					// setSelectedKeys(e.target.value ? [e.target.value] : [])
					// }}
					// onChange={onRangeSliderChange}
					// onAfterChange={onRangeSliderAfterChange}
				/>

				<Space>
					<Button
						type="primary"
						onClick={() => handleFilterPrice(selectedKeys, confirm, dataIndex)}
						icon={<SearchOutlined />}
						size="small"
						style={{ width: 90 }}
					>
						Search
					</Button>
					<Button
						onClick={() => handleReset(clearFilters)}
						size="small"
						style={{ width: 90 }}
					>
						Reset
					</Button>
				</Space>
			</div>
		),
		filterIcon: filtered => (
			<FilterFilled style={{ color: filtered ? "#1890ff" : undefined }} />
		),
		onFilter: (value, record) => {
			//  value is the slider value [min, max]
			// record every row in the table
			// dataIndex is the column name => price
			return record[dataIndex]
				? parseInt(record[dataIndex]) <= parseInt(value.max) &&
						parseInt(record[dataIndex]) >= parseInt(value.min)
				: "";
		},

		onFilterDropdownVisibleChange: visible => {
			if (visible) {
				// setTimeout(() => searchInput.select(), 100);
				console.log("visible");
			}
		},
		render: text => {
			// return filteredColumn === dataIndex ? filteredPrice : text;
			// return filteredColumn === dataIndex && text;
			return text;
		}
	});

	const handleFilterPrice = (selectedKeys, confirm, dataIndex) => {
		confirm();
		console.log(selectedKeys);
		// setFilteredPrice(selectedKeys[0]);
		setFilteredColumn(dataIndex);
	};

	const handleReset = clearFilters => {
		clearFilters();
		setFilteredPrice("");
	};

	return (
		<div className="table-data-wrap">
			<Table
				// scroll={{ x: 3400 }}
				scroll={{ x: "max-content" }}
				rowSelection={{
					type: "checkbox",
					...rowSelection
				}}
				columns={myTableCloumnsArr(getColumnSearchProps)}
				dataSource={myTableDataArr}
				onChange={onTableChange}
			/>
		</div>
	);
};
export default TableData;
