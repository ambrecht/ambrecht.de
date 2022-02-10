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
  max-width: 100vw;
  overflow: hidden;
  display: block;
  background-color: black;

  filter: hue-rotate(333deg);
  cursor: move;
  pointer-events: auto;
`;
