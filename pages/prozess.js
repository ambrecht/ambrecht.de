import styled from 'styled-components';

import Navigation from '../components/Navigation';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Flow from '../components/Flow';
import Image from 'next/image';

//LOGIC
const LOGIC = () => {};

//MARKUP
export default function MARKUP() {
  return (
    <Wrapper>
      <Container>
        <Navigation></Navigation>
        <Flow></Flow>
      </Container>
      <Footer image="/art_05.png"></Footer>
    </Wrapper>
  );
}

//STYLE
const Wrapper = styled.div`
  background-color: #293133;
`;
