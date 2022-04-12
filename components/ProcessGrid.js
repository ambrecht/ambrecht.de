import styled from 'styled-components';

//LOGIC
const LOGIC = () => {};

//MARKUP
export default function MARKUP() {
  return <Wrapper></Wrapper>;
}

//STYLE
const Wrapper = styled.div`
  padding: 9rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1.4fr 1fr 1fr;
  grid-template-rows: auto auto auto auto;
  background-color: red;
`;
