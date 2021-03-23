import { Formik } from "formik";
import React, { useContext } from "react";
import MyTextField from "../../common/custom-ant-inputs/MyTextField";
import { Form } from "antd";
import MyCheckBox from "../../common/custom-ant-inputs/MyCheckBox";
import { CloseSquareTwoTone, PlusCircleOutlined } from "@ant-design/icons";
import * as Yup from "yup";

import VideoPlayIcon from "../../common/icons/VideoPlayIcon";
import PauseIcon from "../../common/icons/PauseIcon";
import ExportIcon from "../../common/icons/ExportIcon";
import RefreshIcon from "../../common/icons/RefreshIcon";
import { Tooltip } from "antd";
import NewTabContext from "../../contexts/new-tab-context/NewTabProvider";
import { useParams } from "react-router";
import { nanoid } from "nanoid";

const MAIN_SEARCH_SCHEMA = Yup.object().shape({
	search_input: Yup.string().required("Please enter a valid URL"),
	contact_checkbox: Yup.boolean(),
	tabs_checkbox: Yup.boolean(),
	phone_checkbox: Yup.boolean()
});

const MainSearchFrom = () => {
	const [form] = Form.useForm();

	const { tabId } = useParams();
	// contexts
	const { addNewTabURL, selectedNewTab, removeNewTabURL } = useContext(
		NewTabContext
	);

	const handleAddUrl = (url, resetForm) => {
		form.resetFields();
		resetForm();
		if (url) {
			console.log(url);
			const tabNewURL = {
				urlId: nanoid(),
				urlName: "random url name",
				urlValue: url
			};

			addNewTabURL(tabId, tabNewURL);
		}
	};

	// handle remove tab url
	const handleRemoveTabURL = urlId => {
		removeNewTabURL(selectedNewTab?.tabId, urlId);
	};

	// render search input urls (maximum 8 urls)
	const renderSearchUrls = urls => {
		return (
			<div className="urls-wrap">
				{urls.map(({ urlId, urlValue, urlName }) => (
					<div key={urlId} className="url-wrap">
						<p className="url-value">{`${urlValue.slice(0, 20)}...`}</p>
						<MyTextField
							className="url-name-input"
							name={`url_name_${urlId}`}
							placeholder="Type the URL name..."
						/>
						<div className="url-actions">
							<MyCheckBox
								initialValue={true}
								className="enable-checkbox"
								name={`url_enable_${urlId}`}
							/>
							<div
								className="remove-btn"
								onClick={() => handleRemoveTabURL(urlId)}
							>
								<CloseSquareTwoTone />
							</div>
						</div>
					</div>
				))}
			</div>
		);
	};

	const formInitialValues = {
		search_input: selectedNewTab ? selectedNewTab.searchInput : "",
		contact_checkbox: selectedNewTab ? selectedNewTab.contactCheckbox : true,
		tabs_checkbox: selectedNewTab ? selectedNewTab.tabsCheckbox : true,
		phone_checkbox: selectedNewTab ? selectedNewTab.phoneCheckbox : true
	};

	return (
		<Formik
			initialValues={formInitialValues}
			onSubmit={async (values, { setSubmitting, resetForm }) => {
				console.log(values);
			}}
			validationSchema={MAIN_SEARCH_SCHEMA}
		>
			{({ values, resetForm, isSubmitting, handleSubmit, errors, touched }) => (
				<>
					<Form
						form={form}
						layout="vertical"
						onFinish={handleSubmit}
						className="main-search-form"
						autoComplete="off"
						initialValues={formInitialValues}
					>
						<div className="search-add-btn-wrap">
							<div className="search-input-urls-wrap">
								<MyTextField
									className="main-search-input"
									name="search_input"
									// label="Search Link"
									placeholder="Type your link here..."
								/>
								{selectedNewTab?.tabURLS.length > 0 &&
									renderSearchUrls(selectedNewTab?.tabURLS)}
							</div>
							<Tooltip placement="bottom" title="Add URL">
								<div
									className="add-btn"
									onClick={() => handleAddUrl(values.search_input, resetForm)}
								>
									<PlusCircleOutlined />
								</div>
							</Tooltip>
						</div>

						<div className="checks-btns-wrap">
							<div className="checks-wrap">
								<MyCheckBox name="contact_checkbox">
									Check if exists in contact base
								</MyCheckBox>
								<MyCheckBox name="tabs_checkbox">
									check if exists in tabs
								</MyCheckBox>
								<MyCheckBox name="phone_checkbox">
									Check if has phone number
								</MyCheckBox>
							</div>

							<div className="action-btns-wrap">
								<div className="action-btn">
									<VideoPlayIcon fillColor="#4d4d4d" />
									Start
								</div>
								<div className="action-btn">
									<PauseIcon fillColor="#4d4d4d" />
									Pause
								</div>
								<div className="action-btn">
									<RefreshIcon fillColor="#4d4d4d" />
									Update
								</div>
								<div className="action-btn">
									<ExportIcon fillColor="#4d4d4d" />
									Export
								</div>
							</div>
						</div>

						{/* <pre>{JSON.stringify(values, null, 2)}</pre>
						<pre>{JSON.stringify(errors, null, 2)}</pre>
						<pre>{JSON.stringify(touched, null, 2)}</pre> */}
					</Form>
				</>
			)}
		</Formik>
	);
};

export default MainSearchFrom;
