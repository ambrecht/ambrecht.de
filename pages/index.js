import Navigation from '../components/Navigation';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import Container from '../components/Container';
import HeroMessage from '../components/HeroMessage';
import Background from '../components/Background';
import Quote from '../components/Quote2';
import Footer from '../components/Footer2';
import Heading from '../components/Heading';
import Contact from '../components/ContactButton';
import Link from 'next/link';
import styled from 'styled-components';

export default function Home() {
  return (
    <Wrapper>
      <Background></Background>
      <Container>
        <Navigation></Navigation>
        <HeroMessage></HeroMessage>
        <Space></Space>
        <Quote autor="Tino Ambrecht" image={'/ich.png'} alttext="Tino Ambrecht">
          Als Experte für die digitale Produktentwicklung, kombiniere ich
          Strategie, Design und Technologie, um Lösungen zu entwickeln, die den
          Kunden in den Mittelpunkt stellen und für diesen einen Mehrwert
          schaffen.
        </Quote>

        <Heading>
          <Link href="/contact" passHref>
            <a aria-hidden="true">
              <Contact fontsize="0.4">kontakt</Contact>
            </a>
          </Link>
        </Heading>
      </Container>

      <Footer image="/art_04.png"></Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow: hidden;
`;

const Space = styled.div`
  width: 100vw;
  height: 20vh;
`;
