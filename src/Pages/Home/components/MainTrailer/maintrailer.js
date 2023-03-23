import MovieCard from 'components/Card/Card';
import { dummy } from 'tempData';
import MovieSlider from './Slider';

const MainTrailer = () => {
	return (
		<>
			<div>
				<MovieSlider dummy={dummy.results} />
			</div>
			{dummy.results.map(item => {
				return (
					<MovieCard
						title={item.title}
						poster_path={item.poster_path}
						vote_average={item.vote_average}
						overview={item.overview}
					/>
				);
			})}
		</>
	);
};

export default MainTrailer;
