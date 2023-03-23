import axios from 'axios';

export const Axios = axios.create({
	baseURL: process.env.REACT_APP_BASEURL,
	params: {
		api_key: process.env.REACT_APP_API_KEY,
		language: 'en-US',
	},
});
