import styled from 'styled-components';
import { useViewportScrollCoords, useWindowScrollCoords } from 'web-api-hooks';

const StyledComponent = ({ tag, children, ...props }) => {
  const Container = styled.div`
    position: absolute;
    width: 20 * ${(props) => props.test}vw;
    height: 100vw;
    background-color: black;

    overflow: hidden;
    transform: skewX(${(props) => props.test}deg);
  `;
  return <Container {...props}>{children}</Container>;
};

//MARKUP

export default function MARKUP() {
  const [windowScrollX, windowScrollY] = useWindowScrollCoords();
  return <StyledComponent test={100 - windowScrollY}></StyledComponent>;
}

//STYLE
