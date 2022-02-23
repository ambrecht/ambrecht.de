import styled from 'styled-components';

//LOGIC
const LOGIC = () => {};

//MARKUP
export default function MARKUP() {
  return <Wrapper></Wrapper>;
}

//STYLE
const Wrapper = styled.div`
  width: 99vw;
  height: 100vh;
  margin-top: 10rem;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100vh;
    background: url('/art_04.png') no-repeat top center;
    background-size: contain;
    background-position: bottom;
    mix-blend-mode: hard-light;
  }
`;
