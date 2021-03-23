import "./TableHeader.scss";

import React, { useRef } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import TrashIcon from "../../../common/icons/TrashIcon";
import ContactBaseIcon from "../../../common/icons/ContactBaseIcon";
import { Form, Radio, Checkbox } from "antd";
import MyTextFieldWithSearch from "../../../common/custom-ant-inputs/MyTextFieldWithSearch";
import MyCheckBox from "../../../common/custom-ant-inputs/MyCheckBox";
import MyRadioGroup from "../../../common/custom-ant-inputs/MyRadioGroup";
import MyCheckBoxsGroup from "../../../common/custom-ant-inputs/MyCheckBoxsGroup";

const MAIN_SEARCH_SCHEMA = Yup.object().shape({
	find_input: Yup.string().required("Please enter a valid data!")
});
const TableHeader = () => {
	const findFormRef = useRef();

	// handle find submit function
	const handleFindSubmit = async (values, { setSubmitting, resetForm }) => {
		console.log(values);
	};

	const initialValues = {
		find_input: "",
		exact_checkbox: false,
		filter_by_radio: "1"
		// filter_by_radio: null
	};

	const [form] = Form.useForm();

	return (
		<div className="data-table-header">
			<Formik
				initialValues={initialValues}
				onSubmit={handleFindSubmit}
				validationSchema={MAIN_SEARCH_SCHEMA}
			>
				{({ values, isSubmitting, handleSubmit, errors, touched }) => (
					<>
						<Form
							ref={findFormRef}
							onFinish={handleSubmit}
							className="main-find-form"
							initialValues={initialValues}
							form={form}
							autoComplete="off"
						>
							<div className="radios-find-wrap">
								<div className="header-btns-checkbox">
									<div className="header-buttons">
										<div className="h-btn select-all-btn">Select All</div>
										<div className="h-btn delete-btn">
											<TrashIcon fillColor="#fff" />
											Delete
										</div>
										<div className="h-btn contact-btn">
											<ContactBaseIcon fillColor="#fff" />
											Contact Base
										</div>
									</div>
									{/* <MyCheckBox className="exact-checkbox" name="exact_checkbox">
										Exact match
									</MyCheckBox> */}
								</div>

								<div className="find-input-radios-wrap">
									<div className="find-input-checkbox-wrap">
										<div className="search-input-wrap">
											<MyTextFieldWithSearch
												name="find_input"
												placeholder="Type your search here..."
												className="find-input"
												onSearch={() => {
													findFormRef?.current?.submit();
												}}
											/>
										</div>
										<MyCheckBox
											className="exact-checkbox"
											name="exact_checkbox"
										>
											Exact match
										</MyCheckBox>
									</div>

									<MyRadioGroup
										className="radios-group-wrap"
										name="filter_by_radio"
									>
										<Radio value={1}>Phone Number</Radio>
										<Radio value={2}>Ad Title</Radio>
										<Radio value={3}>Advertiser Name</Radio>
									</MyRadioGroup>
								</div>
							</div>

							<div className="websites-checkboxs-wrap">
								<MyCheckBoxsGroup
									className="websites-checkboxs"
									name="websites_checkboxs"
								>
									<Checkbox value={1}>OLX</Checkbox>
									<Checkbox value={2}>Aqar Map</Checkbox>
									<Checkbox value={3}>OLX</Checkbox>
									<Checkbox value={4}>Aqar Map</Checkbox>
									<Checkbox value={5}>OLX</Checkbox>
									<Checkbox value={6}>Aqar Map</Checkbox>
								</MyCheckBoxsGroup>
							</div>
						</Form>
						{/* <pre>{JSON.stringify(values, null, 2)}</pre>
						<pre>{JSON.stringify(errors, null, 2)}</pre>
						<pre>{JSON.stringify(touched, null, 2)}</pre> */}
					</>
				)}
			</Formik>
		</div>
	);
};

export default TableHeader;
