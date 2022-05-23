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
import MissionTextBox from '../components/MissionTextBox';

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

        <MissionTextBox heading="Wie ich Ihnen mit meinem Service helfen kann.">
          <p>
            In der digitalen Produktentwicklung werden die Bereiche Research,
            Strategie, UX-Design, Softwarearchitektur, Technologie und Marketing
            zu einem systematischen und ganzheitlichen Prozess verbunden.
          </p>
          <p>
            Dieser Prozess kann sowohl angewendet werden für die Entwicklung
            einer klassischen Website, die Ausarbeitung einer Onlinekampagne
            oder die spezifische Entwicklung eines Vertriebskanals für ein
            bestimmtes Produkt.
          </p>
          Für kleinere Projekte übernehme ich Entwicklung und Implementierung
          selbst, für größere Projekte füge ich mich als externer Mitarbeiter
          und Berater in Ihr Team ein und unterstütze Sie wie eine Art Mentor
          dabei Ihre Ziele zu erreichen. Am Ende liefern Sie ein erfolgreiches
          digitales Produkt aus. Und ich unterstützen Sie von der
          Markteinführung bis zur Aktualisierung.
        </MissionTextBox>

        <MissionTextBox heading="Wann brauchen Sie eines Spezialisten und wann sollten Sie einen Generalisten konsultieren?">
          <p>
            Ich vergleiche das gerne mit dem Bereich der Medizin, wenn Sie ein
            spezifisches Problem mit Ihrem Herzen haben, kann Ihnen kein
            Generalist helfen Sie brauchen einen Spezialisten der sein Leben
            lang nichts anderes als das menschliche Herz studiert hat.
          </p>
          <p>
            Wenn Sie sich allerdings nur unwohlfühlen, diffuse Schmerzen haben
            und lethargisch sind ohne einen klaren Grund dafür zu erkennen, dann
            brauchen Sie einen Generalisten einen ganzheitlichen Mediziner, der
            im besten Falle noch eine psychologische Ausbildung hat.
          </p>
          <p>
            Ähnlich ist es im Bereich der Webentwicklung, wenn Ihr Unternehmen
            ein spezifisches Problem mit der Implementierung einer ASP.NET API
            hat brauchen Sie einen Spezialisten der sich mit nichts anderem als
            Microsoftinfrastruktur beschäftigt.
          </p>
          Wenn Sie allerdings bereits ein Team aus Spezialisten haben, aber
          trotzdem nicht die gewünschten Ziele erreichen, weil die UX-Strategie
          Ihrer Webseite nicht funktioniert, Sie Ihre Unternehmensprinzipien
          nicht klar kommunizieren oder aber sogar potentielle Marktchancen
          übersehen. Dann brauch Sie jemanden wie mich, einen Generalisten,
          einen flexiblen Problemlöser, der einerseits technisches Fachwissen
          und analytische Fähigkeiten besitzt und andererseits ein intuitives
          Gespür für die ganzheitliche Entwicklung von Produkten besitzt.
        </MissionTextBox>

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
