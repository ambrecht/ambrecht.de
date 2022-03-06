import Navigation from '../components/Navigation';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import Container from '../components/Container';
import HeroMessage from '../components/HeroMessage';
import Background from '../components/Background';
import Quote from '../components/Quote2';
import Footer from '../components/Footer';
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
          Kundenerfahrung ist mehr als eine nüchterne Transaktion, sie kann eine
          romantische Liebesgeschichte, ein packender Action-Thriller oder eine
          epochale Heldenreise sein. In meiner Arbeit gehe ich über das
          Erwartbare hinaus. Als ganzheitlicher Denker kombiniere ich Strategie,
          Design und Technologie, um digitale Lösungen für Ihr Unternehmen zu
          entwickeln. Sie können mich als Anwalt der Nutzer oder als kreativen
          Generalisten engagieren. Als Ikonoklasten, der Ihre bisherigen
          Prozesse und Strukturen radikal hinterfragt. Als unabhängigen
          Strategen, der Ihr Team mit einer Mischung aus Logik und Magie dabei
          unterstützt, einen echten Mehrwert zu schaffen und das Internet zu
          einem schöneren Ort zu machen.
        </Quote>
        <Heading>
          <Link href="/contact" passHref>
            <a aria-hidden="true">
              <Contact fontsize="0.6">kontakt</Contact>
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
