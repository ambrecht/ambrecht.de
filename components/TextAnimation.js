import React from 'react';
import styled, { keyframes } from 'styled-components';
import Typewriter from 'typewriter-effect';

export default function TextAnimation() {
  return (
    <Wrapper>
      <Typewriter
        options={{
          strings: [`Erlebnis.`, `Erfolg.`, `Abenteuer!`],
          pauseFor: 10000,
          autoStart: true,
          loop: true,
          cursor: '',
        }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.span`
  display: inline-block;
  background-image: linear-gradient(
    45deg,
    rgba(35, 147, 255, 1) 35%,
    rgba(95, 29, 242, 1) 100%
  );
  background-clip: text;
  background-size: 100%;
  -webkit-text-fill-color: transparent;
`;
