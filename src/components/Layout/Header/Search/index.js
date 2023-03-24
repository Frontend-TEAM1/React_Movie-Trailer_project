import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function SearchBar() {
	const navigate = useNavigate();

	const onSearchSubmit = e => {
		const searchWord = e.target.word.value;
		if (searchWord) {
			navigate('/search');
		}
	};

	return (
		<Form onSubmit={onSearchSubmit}>
			<InputBox
				autoComplete="off"
				placeholder="찾고 싶은 영화를 검색해주세요"
				name="word"
			></InputBox>
			<Button>
				<img src="Assets/search_icon.png" alt="icon"></img>
			</Button>
		</Form>
	);
}

export default SearchBar;

const Form = styled.form`
	display: flex;
	flex-direction: row;
	width: 50%;

	border-radius: 30px;
	height: 5vh;
	text-align: center;
`;

const InputBox = styled.input`
	width: 90%;
	height: 5vh;
	border: none;
	border-top-left-radius: 25px;
	border-bottom-left-radius: 25px;
	position: relative;
	text-align: center;
`;

const Button = styled.button`
	width: 10%;
	height: 5.2vh; //어떻게 같게 하는지 모르겠습니다. 5vh씩 주고 100프로로 하면 달라집니다.
	//background-color: white;
	cursor: pointer;
	border: none;

	border-bottom-right-radius: 25px;
	border-top-right-radius: 25px;
	& img {
		max-width: 100%;
		max-height: 100%;
	}
`;
