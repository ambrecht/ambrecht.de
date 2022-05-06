import styled from 'styled-components';

import Collapsible from 'react-collapsible';
import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  Children,
} from 'react';
import Container from '../components/Container';

import Quote from '../components/Quote2';
import { Gradient, MediaWidth } from '../Mixins/Mixins';
import Footer from '../components/Footer';
import Image from 'next/image';
import Colapse from '../public/Ausklappen.svg';

//MARKUP
export default function MARKUP({ ID, heading, children, direction }) {
  return (
    <Section id={ID}>
      <Text>
        <details>
          <summary>
            <Heading>{heading}</Heading>
          </summary>
          {children}
        </details>
      </Text>
    </Section>
  );
}

//STYLE

const Text = styled.div`
  max-width: 1000px;
  font-size: 1em;
  line-height: 1.4em;
  color: white;
  padding: 1em 0em 3em 5em;
  text-align: center;

  display: block;
  ${MediaWidth}
`;

const Heading = styled.h1`
  display: inline;
  ${Gradient};
`;

const Section = styled.section``;

const FlexBox = styled.div`
  padding-top: 10vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FlexBoxText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: top;
`;

const Space = styled.div`
  height: 1vh;
`;

const BildCon = styled.div`
  width: 80vw;
  height: 60vh;
  z-index: -1000;
  filter: grayscale(100%);

  opacity: 100%;

  @media (max-width: 768px) {
    width: 25vw;
    height: 25vw;
  }
  @media (max-width: 1300px) {
    width: 10vw;
    height: 10vw;
  }
`;
