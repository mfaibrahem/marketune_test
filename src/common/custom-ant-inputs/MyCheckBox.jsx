import React from "react";
import { useField } from "formik";
import { Form, Checkbox } from "antd";

const MyCheckBox = props => {
	const [field, meta] = useField(props);
	return (
		<Form.Item
			valuePropName="checked"
			{...field}
			{...props}
			validateStatus={meta.touched && meta.error ? "error" : "success"}
			help={meta.touched && meta.error ? meta.error : null}
		>
			<Checkbox>{props.children}</Checkbox>
		</Form.Item>
	);
};

export default MyCheckBox;
