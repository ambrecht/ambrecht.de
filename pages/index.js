import Navigation from '../components/Navigation';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import Container from '../components/Container';
import HeroMessage from '../components/HeroMessage';
import Background from '../components/Background';
import Rectangel from '../components/Rectangel';
import Workspace from '../components/InteractiveTable/Index';
import CardSlider from '../components/CardSlider/Index';
import Quote from '../components/Quote';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Background></Background>
      <Container>
        <Navigation></Navigation>
        <HeroMessage></HeroMessage>
        <Quote autor="Tino Ambrecht">
          Kundenerfahrung ist mehr als eine nüchterne Transaktion, sie kann ein
          romantische Liebesgeschichte, ein packender Action-Thriller oder eine
          epochale Heldenreise sein. In meiner Arbeit gehe ich über das
          Erwartbare hinaus. Als ganzheitlicher Denker kombiniere ich Strategie,
          Design und Technologie, um digitale Lösungen für Unternehmen zu
          entwickeln, die den Kunden in den Mittelpunkt stellen und für diesen
          einen Mehrwert schaffen. Sie können mich als Anwalt der Nutzer, als
          Fragesteller oder auch als kreativen Generalisten engagieren. Ich habe
          es gelernt die Maschine zu beherrschen und sie für meine Zwecke
          einzusetzen.
        </Quote>
      </Container>
      <CardSlider></CardSlider>
      <Footer></Footer>
    </>
  );
}
