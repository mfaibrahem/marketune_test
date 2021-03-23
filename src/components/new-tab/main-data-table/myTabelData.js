export const myTableCloumnsArr = getColumnSearchProps => [
	{
		title: "ID",
		dataIndex: "id"
	},
	{
		title: "Title",
		dataIndex: "title",
		defaultSortOrder: "descend"
	},
	{
		title: "Advertiser",
		dataIndex: "advertiser"
	},
	{
		title: "Adv Type",
		dataIndex: "advType"
	},
	{
		title: "ADS",
		dataIndex: "ads",
		sorter: (a, b) => a.ads - b.ads,
		sortDirections: ["descend", "ascend"]
	},
	{
		title: "Phone",
		dataIndex: "phone"
	},
	{
		title: "Price",
		dataIndex: "price",
		sorter: (a, b) => a.price - b.price,
		sortDirections: ["descend", "ascend"],
		...getColumnSearchProps("price")
	},
	{
		title: "Area",
		dataIndex: "area",
		sorter: (a, b) => a.area - b.area,
		sortDirections: ["descend", "ascend"]
	},
	{
		title: "Adv Date",
		dataIndex: "advDate",
		sorter: (a, b) => a.advDate - b.advDate,
		sortDirections: ["descend", "ascend"]
	},
	{
		title: "Following",
		dataIndex: "following"
	},
	{
		title: "Website name",
		dataIndex: "websiteName"
	},
	{
		title: "Address",
		dataIndex: "address"
	},
	{
		title: "No of rooms",
		dataIndex: "nRooms"
	},
	{
		title: "No of bathrooms",
		dataIndex: "nBathrooms"
	},
	{
		title: "Floor",
		dataIndex: "floor"
	},
	{
		title: "Finishing",
		dataIndex: "finishing"
	},
	{
		title: "الوصف",
		dataIndex: "desc"
	},
	{
		title: "GO Link",
		dataIndex: "goLink"
	},
	{
		title: "Date of joining the site",
		dataIndex: "dofs"
	},
	{
		title: "Pictures",
		dataIndex: "picutres"
	}
];

export const myTableDataArr = [
	{
		key: "1",
		id: 1,
		title: "فرصة فيلا للايجار مفروش بمدينتى بسعر فيلا فاضية 254 م",
		advertiser: "محمود رجب",
		advType: "وسيط",
		ads: 13,
		phone: +201023413333,
		price: 100,
		area: 2000,
		advDate: "23-02-2021",
		following: "closed",
		websiteName: "https://google.com",
		address: "5th el-nozha str, cairo-egypt",
		nRooms: 4,
		nBathrooms: 2,
		floor: 4,
		finishing: "Super Lux Finishing",
		desc:
			"rerum nemo consequatur alias laborum repellendus, excepturi tempore mollitia nisi itaque iusto deserunt quae! Temporibus, molestiae.",
		goLink: "https://google.com",
		dofs: "12-12-2018",
		Pictures: "test some random text"
	},
	{
		key: "2",
		id: 1,
		title: "فرصة فيلا للايجار مفروش بمدينتى بسعر فيلا فاضية 254 م",
		advertiser: "محمود رجب",
		advType: "وسيط",
		ads: 123,
		phone: +201023413333,
		price: 200,
		area: 2000,
		advDate: "23-02-2021",
		following: "closed",
		websiteName: "https://google.com",
		address: "5th el-nozha str, cairo-egypt",
		nRooms: 4,
		nBathrooms: 2,
		floor: 4,
		finishing: "Super Lux Finishing",
		desc:
			"rerum nemo consequatur alias laborum repellendus, excepturi tempore mollitia nisi itaque iusto deserunt quae! Temporibus, molestiae.",
		goLink: "https://google.com",
		dofs: "12-12-2018",
		Pictures: "test some random text"
	},
	{
		key: "3",
		id: 1,
		title: "فرصة فيلا للايجار مفروش بمدينتى بسعر فيلا فاضية 254 م",
		advertiser: "محمود رجب",
		advType: "وسيط",
		ads: 123,
		phone: +201023413333,
		price: 300,
		area: 2000,
		advDate: "23-02-2021",
		following: "closed",
		websiteName: "https://google.com",
		address: "5th el-nozha str, cairo-egypt",
		nRooms: 4,
		nBathrooms: 2,
		floor: 4,
		finishing: "Super Lux Finishing",
		desc:
			"rerum nemo consequatur alias laborum repellendus, excepturi tempore mollitia nisi itaque iusto deserunt quae! Temporibus, molestiae.",
		goLink: "https://google.com",
		dofs: "12-12-2018",
		Pictures: "test some random text"
	},
	{
		key: "4",
		id: 1,
		title: "فرصة فيلا للايجار مفروش بمدينتى بسعر فيلا فاضية 254 م",
		advertiser: "محمود رجب",
		advType: "وسيط",
		ads: 123,
		phone: +201023413333,
		price: 400,
		area: 2000,
		advDate: "23-02-2021",
		following: "closed",
		websiteName: "https://google.com",
		address: "5th el-nozha str, cairo-egypt",
		nRooms: 4,
		nBathrooms: 2,
		floor: 4,
		finishing: "Super Lux Finishing",
		desc:
			"rerum nemo consequatur alias laborum repellendus, excepturi tempore mollitia nisi itaque iusto deserunt quae! Temporibus, molestiae.",
		goLink: "https://google.com",
		dofs: "12-12-2018",
		Pictures: "test some random text"
	},
	{
		key: "5",
		id: 1,
		title: "فرصة فيلا للايجار مفروش بمدينتى بسعر فيلا فاضية 254 م",
		advertiser: "محمود رجب",
		advType: "وسيط",
		ads: 123,
		phone: +201023413333,
		price: 500,
		area: 2000,
		advDate: "23-02-2021",
		following: "closed",
		websiteName: "https://google.com",
		address: "5th el-nozha str, cairo-egypt",
		nRooms: 4,
		nBathrooms: 2,
		floor: 4,
		finishing: "Super Lux Finishing",
		desc:
			"rerum nemo consequatur alias laborum repellendus, excepturi tempore mollitia nisi itaque iusto deserunt quae! Temporibus, molestiae.",
		goLink: "https://google.com",
		dofs: "12-12-2018",
		Pictures: "test some random text"
	}
];
