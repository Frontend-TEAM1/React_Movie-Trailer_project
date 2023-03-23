import styled from 'styled-components';
import { flexAllCenter } from 'Styles/common';

const ScrollUpBtn = () => {
	return <Icon>top</Icon>;
};

export default ScrollUpBtn;

const Icon = styled.div`
	width: 40px;
	height: 40px;
	border: 1px solid red;
	border-radius: 50%;
	margin: 20px;
	background-color: purple;
	color: white;
	${flexAllCenter}
	position: sticky;
	right: 30px;
	/* left: 30px; */
	bottom: 30px;
`;
