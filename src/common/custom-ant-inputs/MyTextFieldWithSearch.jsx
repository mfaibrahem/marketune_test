import React from "react";
import { useField } from "formik";
import { Form, Input } from "antd";
import SearchIcon from "../icons/SearchIcon";
const MyTextFieldWithSearch = props => {
	const { Search } = Input;
	const [field, meta] = useField(props);
	return (
		<Form.Item
			{...field}
			// {...props}
			name={props?.name}
			className={props?.className}
			validateStatus={meta.touched && meta.error ? "error" : "success"}
			help={meta.touched && meta.error ? meta.error : null}
		>
			<Search
				placeholder={props?.placeholder}
				onSearch={props?.onSearch}
				enterButton={
					<span className="find-span">
						Find
						<SearchIcon fillColor="#fff" />
					</span>
				}
			/>
		</Form.Item>
	);
};

export default MyTextFieldWithSearch;
