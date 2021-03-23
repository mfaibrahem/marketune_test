import React from "react";
import { useField } from "formik";
import { Form, Checkbox } from "antd";
const MyCheckBoxsGroup = props => {
	const [field, meta] = useField(props);

	return (
		<Form.Item
			{...field}
			{...props}
			validateStatus={meta.touched && meta.error ? "error" : "success"}
			help={meta.touched && meta.error ? meta.error : null}
		>
			<Checkbox.Group
				// onChange={field.onChange}
				name={props?.name}
				options={props?.checkboxsOptions}
			>
				{props.children}
			</Checkbox.Group>
		</Form.Item>
	);
};

export default MyCheckBoxsGroup;
