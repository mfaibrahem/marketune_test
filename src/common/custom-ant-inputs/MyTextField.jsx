import React from "react";
import { useField } from "formik";
import { Form, Input } from "antd";

const MyTextField = props => {
	const [field, meta] = useField(props);
	return (
		<Form.Item
			{...field}
			{...props}
			validateStatus={meta.touched && meta.error ? "error" : "success"}
			help={meta.touched && meta.error ? meta.error : null}
		>
			<Input placeholder={props?.placeholder} />
		</Form.Item>
	);
};

export default MyTextField;
