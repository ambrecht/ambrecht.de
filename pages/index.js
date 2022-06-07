import Navigation from '../components/Navigation';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import Container from '../components/Container';
import HeroMessage from '../components/HeroMessage';
import Ambrecht from '../components/ambrecht';
import Quote from '../components/Quote2';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import Contact from '../components/ContactButton';
import Link from 'next/link';
import styled, { keyframes, css } from 'styled-components';
import MissionTextBox from '../components/MissionTextBox';
import Background from '../components/Background';

export default function Home() {
  const [audio, setAudio] = useState(null);
  const [show, setShow] = useState(true);
  const [fade, setFade] = useState(null);
  const [ease, setEase] = useState(null);
  const [universe, setUniverse] = useState(false);

  useEffect(() => {
    setAudio(new Audio('/Audio/universe.wav'));
  }, []);

  return (
    <>
      <Wrapper fade={fade} ease={ease}>
        <Background></Background>
        {!show && (
          <Wrapper2
            onClick={() => {
              setFade(fadeIn);
              setEase('ease-in');
              setUniverse(false);
              setShow(!show);
              audio.pause();
            }}
          >
            <Ambrecht></Ambrecht>
            <Contact2 fontsize={0.5}>Reise beenden</Contact2>
          </Wrapper2>
        )}
        ,
        {show && (
          <>
            <Container>
              <Navigation></Navigation>
              <HeroMessage></HeroMessage>
              <Space></Space>
              <Wrapper2
                onClick={() => {
                  setEase('ease-in');
                  setUniverse(true);
                  setShow(!show);
                  audio?.load();
                  audio.loop = true;
                  audio?.play();
                }}
              >
                {' '}
                <Contact>Reise starten</Contact>
              </Wrapper2>

              <Quote
                autor="Tino Ambrecht"
                image={'/ich.png'}
                alttext="Tino Ambrecht"
              >
                Als Experte für die digitale Produktentwicklung, kombiniere ich
                Strategie, Design und Technologie, um Lösungen zu entwickeln,
                die den Kunden in den Mittelpunkt stellen und für diesen einen
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
                    Entwicklung einer klassischen Website, die Ausarbeitung
                    einer Onlinekampagne oder die spezifische Entwicklung eines
                    Vertriebskanals für ein bestimmtes Produkt.
                  </p>
                  Für kleinere Projekte übernehme ich Entwicklung und
                  Implementierung selbst, für größere Projekte füge ich mich als
                  externer Mitarbeiter und Berater in Ihr Team ein und
                  unterstütze Sie wie eine Art Mentor dabei Ihre Ziele zu
                  erreichen. Am Ende liefern Sie ein erfolgreiches digitales
                  Produkt aus. Und ich unterstützen Sie von der Markteinführung
                  bis zur Aktualisierung.
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
        )}
      </Wrapper>
    </>
  );
}

const fadeIn = keyframes`
 
    0% {
      opacity: 0;
      visibility: hidden;
    }
    100% {
      opacity: 1;
      visibility: visible;
    }`;

const fadeOut = keyframes` 
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
  
`;

const Contact2 = styled(Contact)`
  width: 500%;
`;

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

const Wrapper2 = styled.div`
  display: grid;
  justify-content: center;
`;

const Space = styled.div`
  width: 100vw;
  height: 20vh;
`;
