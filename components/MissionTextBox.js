import styled from 'styled-components';

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

//MARKUP
export default function MARKUP({ ID, heading, children, direction, Table }) {
  Table(ID);
  return (
    <Section id={ID}>
      <FlexBox>
        <FlexBoxText direction={direction}>
          <Text>
            <Heading>{heading}</Heading>
            {children}
          </Text>
        </FlexBoxText>
      </FlexBox>
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

  display: block;
  ${MediaWidth}
`;

const Heading = styled.h1`
  ${Gradient}
`;

const Section = styled.section``;

const FlexBox = styled.div`
  padding-top: 10vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FlexBoxText = styled.div`
  padding-top: 10vh;
  display: flex;
  flex-direction: ${(props) => (props.direction ? 'row' : 'row-reverse')};
  justify-content: center;
  align-items: top;
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
