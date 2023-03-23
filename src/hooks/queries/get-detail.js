import { useQuery } from '@tanstack/react-query';
import MovieApi from 'Apis/movieApi';
import { queryConfig } from './@config';

const getDetail = async params => {
	const res = await MovieApi.getDetailContent(params);
	return res.data;
};

const useGetDetail = params => {
	const { data, error, status, isLoading } = useQuery(
		['GET_DETAIL'],
		getDetail(params),
		{ ...queryConfig },
	);
	return { data, error, status, isLoading };
};
export default useGetDetail;
