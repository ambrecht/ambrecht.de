import styled, { css } from 'styled-components';

import TextAnimation from './TextAnimation';

//MARKUP
export default function MARKUP(props) {
  return (
    <>
      <HeroH1>
        Hier werden Ihre Produkte zum digitalen&nbsp;
        <TextAnimation></TextAnimation>
      </HeroH1>

      <HeroP>Wie eine Reise auf einen fremden Planeten...</HeroP>
    </>
  );
}

//STYLE

const HeroH1 = styled.h1`
  margin: 0;
  padding-top: 1em;
  font-size: 5em;
  color: white;
  text-transform: uppercase;
  text-align: left;
  z-index: 10;
  width: 100%
  max-width: 11em;
  overflow: none;
  
`;

const HeroP = styled.h4`
  margin-top: 8vh;
  width: 100%;
  color: white;
  text-transform: uppercase;
  text-align: center;
  z-index: 10;
`;
