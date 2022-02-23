import React from 'react';
import styled, { keyframes } from 'styled-components';
import Typewriter from 'typewriter-effect';

export default function TextAnimation(props) {
  return (
    <Wrapper>
      <Typewriter
        options={{
          strings: props.children.split(' '),
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
    72.61deg,
    rgba(35, 147, 255, 1) 22.63%,
    rgba(95, 29, 242, 1) 84.67%
  );
  -webkit-background-clip: text;
  background-size: 100%;
  -webkit-text-fill-color: transparent;
`;
