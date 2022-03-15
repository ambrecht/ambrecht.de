import styled from 'styled-components';

import Navigation from '../components/Navigation';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import Container from '../components/Container';
import MissionTextBox from '../components/MissionTextBox';

import Quote from '../components/Quote2';
import { Gradient, MediaWidth } from '../Mixins/Mixins';
import Footer from '../components/Footer';
import Image from 'next/image';

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
          <div></div>

          <MissionTextBox
            image={'/mission (1).jpg'}
            imagealt={'Bild eines Berges'}
            heading={'MEINE MISSION'}
            direction={true}
          >
            Für meine Kunden entwickle Ich mit der Hilfe von modernen
            Technologien digitale Produkte, die Emotionen auslösen, einen
            Mehrwert schaffen und das Leben anderer Menschen bereichern.
          </MissionTextBox>
          <MissionTextBox
            image={'/mission (2).jpg'}
            imagealt={'Bild eines Berges'}
            heading={'MEINE VISION'}
            direction={false}
          >
            Das Ziel meiner Arbeit ist es, mit unterschiedlichen Menschen an
            verschiedenen Projekten zu arbeiten und diese zum Erfolg zu führen.
            Gemeinsam machen wir das Internet zu einem schöneren Ort und wachsen
            an den Herausforderungen jedes Projekts.
          </MissionTextBox>
          <MissionTextBox
            image={'/mission (3).jpg'}
            imagealt={'Bild eines Berges'}
            heading={'MEINE WERTE'}
            direction={true}
          >
            - Ich begenge meinem Gegenüber auf Augenhöhe. - Das Leben ist ein
            endloser Lernprozess. - Ich übernehme Verantwortung für meine
            Resultate. - Technologie darf niemals Selbstzweck sein. -
            Selbstreflektion hilft mir mich in die Sichtweise meines Gegenübers
            hineinzuversetzen - Geistige Unabhänigkeit erlaubt es mir mich
            selbst und meine Umgebung kritisch zu hinterfragen.
          </MissionTextBox>

          <MissionTextBox
            image={'/mission (4).jpg'}
            imagealt={'Bild eines Berges'}
            heading={'MEINE STÄRKEN'}
            direction={false}
          >
            Intuition und Wissen, Sensibilität und Einsicht, ästhetisches
            Empfinden und intellektuelle Begabung.
          </MissionTextBox>
          <MissionTextBox
            image="/mission2.png"
            imagealt={'Bild eines Berges'}
            heading={'MEIN VERSPERECHEN'}
            direction={true}
          >
            Intuition und Wissen, Sensibilität und Einsicht, ästhetisches
            Empfinden und intellektuelle Begabung.
          </MissionTextBox>
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

const FlexBox = styled.div`
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
