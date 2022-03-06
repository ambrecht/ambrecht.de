import styled from 'styled-components';

//LOGIC
const LOGIC = () => {};

//MARKUP
export default function MARKUP({ image }) {
  return (
    <Wrapper>
      <Footer image={image}></Footer>
      <Copy>
        COPYRIGHT ©1990-2022. Alle Rechte vorbehalten. Nicht autorisierte, ganze
        oder teilweise Reproduktion ist strengstens untersagt.
      </Copy>
    </Wrapper>
  );
}

//STYLE
const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 99vw;
  height: 100vh;
`;

const Footer = styled.div`
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${(props) => `url(${props.image}) no-repeat top center`};
    background-size: cover;
    background-position: bottom;
    mix-blend-mode: hard-light;
    filter: grayscale(100%);
  }
`;

const Copy = styled.span`
  text-align: center;
  font-size: 0.5em;
  position: absolute;
  bottom: 5%;
  left: 30%;
  color: white;
  opacity: 80%;
`;
