import styled from 'styled-components';

import Navigation from '../components/Navigation';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import Container from '../components/Container';

import Workspace from '../components/InteractiveTable';
import SubHero from '../components/SubHero';
import Image from 'next/image';
import Quote from '../components/Quote';

//LOGIC
const LOGIC = () => {};

//MARKUP
export default function MARKUP() {
  return (
    <Wrapper>
      <Container>
        <Navigation></Navigation>
        <Space></Space>
        <Heading>Zeit für eine Selbstbeschreibung:</Heading>
        <SubHero></SubHero>
      </Container>
    </Wrapper>
  );
}

//STYLE
const Wrapper = styled.div`
  overflow: hidden;
  background-color: #293133;
`;

const Heading = styled.h1`
  border-top: 5px solid white;
  border-bottom: 5px solid white;
  padding: 2rem;

  display: block;
  color: white;
  font-size: 2rem;
  font-weight: 300;
  text-align: center;

  letter-spacing: 0.01em;

  background-image: linear-gradient(to right, #2393ff 0%, #5f1df2 100%);
  -webkit-background-clip: text;
  background-size: 100%;
  -webkit-text-fill-color: transparent;
`;

const Space = styled.div`
  width: 100vw;
  height: 10vh;
`;
