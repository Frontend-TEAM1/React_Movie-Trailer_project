// import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { flexSpaceBetween } from 'Styles/common';
import SearchBar from './Search';
const BasicHeader = () => {
	// const navigate = Navigate();

	return (
		<S.HeaderWrapper>
			<S.HeaderLogo>
				<img src="Assets/mascot.png" />
				{/* <div onClick={() => navigate('/')}>ICON</div> */}
				{/* <Navigate to="/" /> */}
				<span>MOVIE 찾냥?!</span>
			</S.HeaderLogo>
			<SearchBar />
			<S.HeaderMenu>
				<span>상영</span>
				<span>예정</span>
				<span>인기</span>
			</S.HeaderMenu>
		</S.HeaderWrapper>
	);
};

export default BasicHeader;

const HeaderWrapper = styled.div`
	width: 100%;
	border: 1px solid grey;
	padding: 50px;
	${flexSpaceBetween}
	color: white;
	background-color: black;
`;

const HeaderLogo = styled.div`
	height: 50px;
	width: 300px;
	${flexSpaceBetween}
	/* border: 1px dotted yellow; */
	> img {
		/* border: 1px dotted yellow; */
		width: 150px;
	}
	> span {
		font-size: 23px;
	}
`;

const HeaderMenu = styled.div`
	width: 25%;
	${flexSpaceBetween}
`;

const S = {
	HeaderWrapper,
	HeaderLogo,
	HeaderMenu,
};
