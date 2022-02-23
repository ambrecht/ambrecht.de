import styled from 'styled-components';
import Universe from '../components/Universe/Universe';

//MARKUP
export default function BackgroundUniverse() {
  return (
    <Background>
      <Universe></Universe>
    </Background>
  );
}

//STYLE
const Background = styled.div`
  position: fixed;
  height: 100vh;
  max-width: 100%;
  overflow: hidden;
  display: block;
  background-color: black;
  overflow: hidden;
  z-index: -1000;

  filter: hue-rotate(333deg);
  cursor: move;
  pointer-events: auto;
`;
