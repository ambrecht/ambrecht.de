import styled, { keyframes } from 'styled-components';
import dynamic from 'next/dynamic';

const Universe = dynamic(() => import('../components/Universe/Universe.js'), {
  loading: () => <Background>LOAD UNIVERSE!</Background>,
  ssr: false,
});

//MARKUP
export default function BackgroundUniverse() {
  return (
    <Background>
      <Universe></Universe>
    </Background>
  );
}

//STYLE

const blendIn = keyframes`
  from {
    opacity: 0
  }

  to {
    opacity: 1
  }
`;

const Background = styled.div`
  position: fixed;
  height: 100vh;
  max-width: 100%;
  overflow: hidden;
  display: block;
  background-color: #293133;
  overflow: hidden;
  z-index: -1000;

  filter: hue-rotate(333deg);
  cursor: url('/cursor.svg') 9 9, auto;
  pointer-events: auto;
  animation: ${blendIn} 1s ease-in;
`;
