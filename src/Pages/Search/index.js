import { useInfiniteQuery } from '@tanstack/react-query';
import MovieApi from 'Apis/movieApi';
import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import SearchedMovies from './components/searchedMovies';

function SearchPage() {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);

	const word = searchParams.get('word');

	const {
		data: searchResults,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
	} = useInfiniteQuery(
		['searchResults', word],
		({ pageParam = 1 }) => MovieApi.getSearch(word, pageParam),
		{
			onError: () => console.log('에러'),
			getNextPageParam: (lastPage, allPages) => {
				if (lastPage.data.page < lastPage.data.total_pages) {
					return lastPage.data.page + 1;
				} else {
					return undefined;
				}
			},
		},
	);
	const handleScroll = useCallback(
		node => {
			if (node && !isFetchingNextPage && hasNextPage) {
				const observer = new IntersectionObserver(
					entries => {
						if (entries[0].isIntersecting) {
							fetchNextPage();
						}
					},
					{
						rootMargin: '0px 0px 500px 0px',
					},
				);
				observer.observe(node);
			}
		},
		[hasNextPage, fetchNextPage],
	);

	return (
		<Wrapper>
			<h1>Search "{word}"</h1>
			{searchResults &&
				searchResults.pages.map(
					page =>
						page &&
						page.data.results.map(movie => (
							<SearchedMovies key={movie.id} movie={movie} />
						)),
				)}
			<div ref={handleScroll}></div>
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
