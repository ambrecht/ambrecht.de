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
            Mehrwert schaffen und das Leben anderer Menschen bereichern. Ich
            verbinde bei meiner Arbeit folgende Bereiche und lasse mich von
            diesen leiten:
          </MissionTextBox>
          <MissionTextBox heading={'1. Philosophie '} direction={true}>
            Im Umgang mit Technologie ist ein philosophisches Fundament eine
            wichtige Voraussetzung um sich über den Sinn und Zweck von Technik
            klar zu werden. Technologie sollte dabei niemals Selbstzweck sein,
            sondern immer nur als Werkzeug gebraucht werden, einen bestimmten
            Zweck zu erfüllen. Der große Schweizer Philosoph Paul Häberlin
            schreibt seiner kleinen Schrift "Vom Menschen und seiner
            Bestimmung". <br />
            "So ist alle Technik der "Nützlichekit", d.h der Lebensförderung
            wertvoll, sofern sie "Leben" als geistiges Leben intendiert. Sie
            wäre nur dann grundsätzlich abzulehnen, wenn sie das bloße Dasein
            als höchsten Wert anvisierte, sie wäre dann geistlose
            kulturfeindliche Technik." <br />
            <br />
            Wird die Technik also zum Selbstzweck, wird sie grundsätzlich
            destruktiv, sie verfehlt ihren Zweck, der immer nur der Entfaltung
            des Schönen, des Guten und des Wahren dienen darf.
            <br />
            <br /> Die Philosophie hilft auch dabei, die Grenzen von Technologie
            zu bestimmen. Aktuell wird sehr viel über die technische
            Singularität gesprochen und viele Unternehmen investieren Geld in
            die Entwicklung von sogenannter "künstlicher Intelligenz".
            <br />
            <br />
            Philosophisch ist aber völlig ausgeschlossen, dass jemals etwas wie
            eine sich selbst entwickelnde Superintelligenz erschaffen werden
            kann, welche die den menschlichen Verstand übertrifft.
            <br />
            <br />
            Deterministische Autoren wie Kurzweil argumentieren, dass der
            menschliche Geist aus elektrischen und chemischen Komponenten
            besteht, die an sich unintelligent sind. Aber hier stoßen wir auf
            das sogenannte Gödel-Turing-Problem der Selbstreferenz: Indem
            Kurzweil seinen eigenen Verstand und sein eignes Bewusstsein
            benutzen muss, um die Bedeutung des Bewusstseins zu leugnen,
            wiederlegt er sich selbst.
            <br />
            <br /> Selbst der leistungstärkste Computer heute basiert auf den
            gleichen Prinzipien wie Zuses erster Rechner von 1937. Egal wie sehr
            sich die Technik auch weiterentwickelt, alle Symbole, die von einem
            Computer verarbeitet werden, bedürfen der Vermittlung durch einen
            interpretierenden Geist. Die Maschine selbst weiß aber nichts. Genau
            so wie ein Abakus ohne einen interpretierenden Geist nicht weiter
            ist als eine nutzlose Konstruktion.
            <br />
            <br />
            Das heißt es gibt einen entscheidenden Unterschied zwischen
            programmierbaren Maschinen und Programmierern. Die Maschinen sind
            deterministisch und die Programmierer sind kreativ. Bewusstsein
            entsteht nicht aus dem Denken, sondern es ist die Grundlage des
            Denkens. <br />
            <br />
            Bei weiterem Interesse empfehle ich dazu das Buch "Life After
            Google" von George Gilder.
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
