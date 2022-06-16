import Navigation from '../components/Navigation';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import Container from '../components/Container';
import HeroMessage from '../components/HeroMessage';
import Quote from '../components/Quote2';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Contact from '../components/ContactButton';
import Link from 'next/link';
import styled, { keyframes, css } from 'styled-components';
import MissionTextBox from '../components/MissionTextBox';
import Background from '../components/Background';

export default function Home() {
  return (
    <>
      <Wrapper>
        <Background></Background>
        <>
          <Container>
            <Navigation></Navigation>
            <HeroMessage></HeroMessage>
            <Space></Space>

            <Quote
              autor="Tino Ambrecht"
              image={'/ich.png'}
              alttext="Tino Ambrecht"
            >
              Als Experte für die digitale Produktentwicklung, kombiniere ich
              Strategie, Design und Technologie, um Lösungen zu entwickeln, die
              den Kunden in den Mittelpunkt stellen und für diesen einen
              Mehrwert schaffen.
            </Quote>

            <Flexbox>
              <MissionTextBox2 heading="Wie ich Ihnen mit meinem Service helfen kann.">
                <p>
                  In der digitalen Produktentwicklung werden die Bereiche
                  Research, Strategie, UX-Design, Softwarearchitektur,
                  Technologie und Marketing zu einem systematischen und
                  ganzheitlichen Prozess verbunden.
                </p>
                <p>
                  Dieser Prozess kann sowohl angewendet werden für die
                  Entwicklung einer klassischen Website, die Ausarbeitung einer
                  Onlinekampagne oder die spezifische Entwicklung eines
                  Vertriebskanals für ein bestimmtes Produkt.
                </p>
                Im Gegensatz zu einer klassischen Agentur habe ich kein festes
                Team, sondern greife je nach der Anforderung des Projekts auf
                ein verteieltes Netzwerk von etablierten Experten zurück.
              </MissionTextBox2>
            </Flexbox>

            <Heading>
              <Link href="/contact" passHref>
                <a aria-hidden="true">
                  <Contact fontsize="0.4">kontakt</Contact>
                </a>
              </Link>
            </Heading>
          </Container>

          <Footer image="/art_04.png"></Footer>
        </>
      </Wrapper>
    </>
  );
}

const MissionTextBox2 = styled(MissionTextBox)`
  display: none;
`;

const Flexbox = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-inline-size: 60ch;
  margin-inline: auto;
`;

const Wrapper = styled.div`
  overflow: hidden;
`;

const Space = styled.div`
  width: 100vw;
  height: 20vh;
`;
