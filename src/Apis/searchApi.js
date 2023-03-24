import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '8ac33ac94ef02169d162126e506ade90';

export const fetchSearchResults = async searchKey => {
	const type = searchKey ? 'search' : 'discover/movie';

	const response = await axios.get(`${API_URL}/${type}/movie`, {
		params: {
			api_key: API_KEY,
			query: searchKey,
			language: 'ko-KR',
		},
	});
	return response.data.results;
};
