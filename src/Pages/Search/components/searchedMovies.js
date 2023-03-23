import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function SearchedMovies({ key, movie }) {
	const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w300';
	const navigate = useNavigate();
	const goDetail = () => {
		navigate(`/detail/${movie.id}`);
	};

	return (
		<Wrapper onClick={goDetail}>
			<Poster>
				<img
					src={IMG_BASE_URL + movie.poster_path}
					alt="포스터"
					width="100%"
					height="100%"
				></img>
			</Poster>
			<Info>
				<Top>
					<Title>{movie.title}</Title>
					<Score>
						{' '}
						{movie.vote_average === 0
							? `${movie.release_date} 개봉 예정입니다.`
							: `⭐${movie.vote_average.toFixed(1)}`}
					</Score>
				</Top>
				<Preview> {movie.overview}</Preview>
			</Info>
		</Wrapper>
	);
}
export default SearchedMovies;

const Wrapper = styled.div`
	color: white;
	background-color: black;
	height: 40vh;
	list-style: none;
	margin: 0;
	padding: 0;
	//border: 5px solid salmon;
	display: flex;
	justify-content: center;
	margin-bottom: 10vh;
`;

const Poster = styled.div`
	width: 17%;
	height: 100%;
	//border: 3px solid black;
`;

const Info = styled.div`
	width: 83%;
	height: 100%;
	//border: 3px solid yellowgreen;
	display: flex;
	flex-direction: column;
`;
const Top = styled.div`
	height: 50%;
	//border: 3px solid yellowgreen;
	display: flex;
	flex-direction: row;
`;
const Title = styled.div`
	width: 40%;
	height: 100%;
	//border: 2px solid hotpink;
	font-weight: 900;
	font-size: large;
	display: flex;
	align-items: center;
	padding-left: 10%;
`;

const Score = styled.div`
	width: 60%;
	height: 100%;
	//border: 2px solid tan;
	display: flex;
	align-items: center;
`;

const Preview = styled.div`
	width: 100%;
	height: 50%;
	display: -webkit-box;
	overflow: hidden;
`;
