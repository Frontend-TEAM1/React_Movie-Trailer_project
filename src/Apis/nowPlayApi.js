import { Axios } from './@core';

const PATH = 'now_playing';

const NowPlayApi = {
	getNowPlay(params) {
		return Axios.get(PATH, {
			params: {
				page: params,
			},
		});
	},
};

export default NowPlayApi;
