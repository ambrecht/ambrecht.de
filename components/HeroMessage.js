import styled, { css } from 'styled-components';
import { useWindowSize } from 'web-api-hooks';

import TextAnimation from './TextAnimation';

//MARKUP
export default function MARKUP(props) {
  const [windowWidth, windowHeight] = useWindowSize();

  return (
    <>
      <HeroH1 windowWidth={windowWidth}>
        Hier werden Ihre Produkte zum digitalen&nbsp;
        <TextAnimation>Erfolg Erlebnis Abenteuer</TextAnimation>
      </HeroH1>

      <HeroP>Wie eine Reise durch den Kosmos der Ideen...</HeroP>
    </>
  );
}

//STYLE

const HeroH1 = styled.h1`
  margin: 0;
  padding-top: 1em;
letter-spacing: 0.008em;
  
  font-size:  5rem;
  color: white;
  text-transform: uppercase;
  text-align: left;
  z-index: 10;
  width: 100%
  overflow: none;

   @media (max-width: 768px) {
     font-size:  3rem;

  }
  
`;

const HeroP = styled.h4`
  margin-top: 8vh;
  width: 100%;
  color: white;
  letter-spacing: 0.008em;
  font-size: 1rem;

  text-align: center;
  z-index: 10;
  font-weight: 100;
`;
