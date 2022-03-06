import styled from 'styled-components';

import Navigation from '../components/Navigation';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import Container from '../components/Container';

import Quote from '../components/Quote2';
import { Gradient, MediaWidth } from '../Mixins/Mixins';
import Footer from '../components/Footer';

//LOGIC
const LOGIC = () => {};

//MARKUP
export default function MARKUP() {
  return (
    <Wrapper>
      <Container>
        <Navigation></Navigation>

        <FlexBox>
          <Quote
            autor="Hermes Trismegistus"
            image="/hermes.png"
            alttext="Hermes der Meister"
          >
            Die Schönheit des Guten umstrahlt den Geist gänzlich, läßt die ganze
            Seele wieder aufleuchten, zieht sie durch den Körper hinauf und
            verwandelt ihn ganz in wahres Sein.
          </Quote>

          <Text>
            <Heading>MEINE MISSION</Heading>
            Für meine Kunden entwickle Ich mit der Hilfe von modernen
            Technologien digitale Produkte, die Emotionen auslösen, einen
            Mehrwert schaffen und das Leben anderer Menschen bereichern.
          </Text>

          <Text>
            <Heading>MEINE VISION</Heading>
            Das Ziel meiner Arbeit ist es, mit unterschiedlichen Menschen an
            verschiedenen Projekten zu arbeiten und diese zum Erfolg zu führen.
            Gemeinsam machen wir das Internet zu einem schöneren Ort und wachsen
            an den Herausforderungen jedes Projekts.
          </Text>
          <Text>
            <Heading>MEINE WERTE</Heading>- Ich begenge meinem Gegenüber auf
            Augenhöhe. - Das Leben ist ein endloser Lernprozess. - Ich übernehme
            Verantwortung für meine Resultate. - Technologie darf niemals
            Selbstzweck sein. - Selbstreflektion hilft mir mich in die
            Sichtweise meines Gegenübers hineinzuversetzen - Geistige
            Unabhänigkeit erlaubt es mir mich selbst und meine Umgebung kritisch
            zu hinterfragen.
          </Text>

          <Text>
            <Heading>MEINE STÄRKEN</Heading>Intuition und Wissen, Sensibilität
            und Einsicht, ästhetisches Empfinden und intellektuelle Begabung.
          </Text>

          <Text>
            <Heading>MEIN VERSPERECHEN</Heading>Jedes Unternehmen kann sich
            erfolgreich online Positionieren und seine Zielgruppe erreichen.
          </Text>
        </FlexBox>
      </Container>
      <Footer image="/art_01.png"></Footer>
    </Wrapper>
  );
}

//STYLE
const Wrapper = styled.div`
  background-color: #293133;
  overflow: hidden;
`;

const Text = styled.div`
  max-width: 1000px;
  font-size: 1.2em;
  line-height: 1.2;
  color: white;
  padding: 1em 0em 3em 5em;
  display: block;
  ${MediaWidth}
`;

const Heading = styled.h1`
  ${Gradient}
`;

const FlexBox = styled.div`
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
