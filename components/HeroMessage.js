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
        <TextAnimation>Erfolg Erlebnis </TextAnimation>
      </HeroH1>

      <HeroP>analytisches Denken trifft auf kreative Imagination...</HeroP>
    </>
  );
}

//STYLE

const HeroH1 = styled.h1`
  max-width: 1900px;
  margin: 0;
  padding-top: 1em;
  letter-spacing: 0.02em;

  font-size: 5rem;
  color: white;
  text-transform: uppercase;
  text-align: left;
  z-index: 10;

  overflow: none;

  @media (max-width: 300px) {
    font-size: 15vw;
  }

  @media only screen and (max-height: 700px) {
    font-size: 12vh;
    width: 61.8vw;
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
  text-transform: lowercase;

  @media only screen and (max-height: 700px) {
    font-size: 5vh;
    font-weight: 200;
    width: 61.8vw;
  }
`;
