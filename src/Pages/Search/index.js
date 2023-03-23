import { useQuery } from '@tanstack/react-query';
import { fetchSearchResults } from 'Apis/searchApi';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import SearchedMovies from './components/searchedMovies';

function SearchPage() {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);

	const word = searchParams.get('word');

	const {
		isLoading,
		isError,
		data: searchResults,
		error,
	} = useQuery(['searchResults', word], () => fetchSearchResults(word));

	return (
		<Wrapper>
			<h1>Search "{word}"</h1>
			{searchResults &&
				searchResults.map(movie => (
					<SearchedMovies key={movie.id} movie={movie}></SearchedMovies>
				))}
		</Wrapper>
	);
}

export default SearchPage;

const Wrapper = styled.div`
	border: 2px solid cornflowerblue;
	margin: 0 15%;
`;

//요청시 Query String에 페이지가 있습니다. 아무것도 설정하지 않을 시 1페이지만 불러오지만, 모든 페이지를 불러오고 싶습니다.

//검색년도 범위 설정

/*
const poster=searchResults[0].poster_path;
	 title=searchResults[0].title;
	score=searchResults[0].vote_average;
	 preview=searchResults[0].overview;
*/
/*<SearchedMovies
				post={searchResults[0].poster_path}
				title={searchResults[0].title}
				score={searchResults[0].vote_average}
				preview={searchResults[0].overview}
			/>*/

/*
			const API_URL = 'https://api.themoviedb.org/3';
	const API_KEY = '8ac33ac94ef02169d162126e506ade90';

	const fetchSearchResults = async searchKey => {
		const type = searchKey ? 'search' : 'discover/movie';
		const response = await axios.get(`${API_URL}/${type}/movie`, {
			params: {
				api_key: API_KEY,
				query: searchKey,
				language: 'ko-KR',
			},
		});
		setSearchResults(response.data.results);
	};

	useEffect(() => {
		fetchSearchResults(word);
	}, []);
			*/
