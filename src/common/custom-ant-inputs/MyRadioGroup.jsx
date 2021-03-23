import React from "react";
import { useField } from "formik";
import { Form, Radio } from "antd";
const MyRadioGroup = props => {
	const [field, meta] = useField(props);

	return (
		<Form.Item
			{...field}
			{...props}
			validateStatus={meta.touched && meta.error ? "error" : "success"}
			help={meta.touched && meta.error ? meta.error : null}
		>
			<Radio.Group
				// onChange={field.onChange}
				name={props.name}
			>
				{props.children}
			</Radio.Group>
		</Form.Item>
	);
};

export default MyRadioGroup;
