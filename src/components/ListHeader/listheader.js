import styled from 'styled-components';
import { flexAlignCenter } from 'Styles/common';

const ListHeader = () => {
	return (
		<S.Wrapper>
			<div>Now Playing</div>
			<button>더보기 &gt;</button>
		</S.Wrapper>
	);
};

export default ListHeader;

const Wrapper = styled.div`
	${flexAlignCenter}
	justify-content: space-between;
`;
const S = {
	Wrapper,
};
