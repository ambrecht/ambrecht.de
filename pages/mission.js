import styled from 'styled-components';

import Navigation from '../components/Navigation';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import Container from '../components/Container';
import MissionTextBox from '../components/MissionTextBox';
import TableOfContents from '../components/tableOfContents/tableofContents';
import Quote from '../components/Quote2';
import { Gradient, MediaWidth } from '../Mixins/Mixins';
import Footer from '../components/Footer';
import Image from 'next/image';

//LOGIC

//MARKUP
export default function MARKUP() {
  const LOGIC = (externID) => {
    console.log('Bier');
  };

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
          <TableOfContents></TableOfContents>
          <MissionTextBox
            ID="1"
            heading={'MEINE MISSION'}
            direction={false}
            Table={LOGIC}
          >
            Für meine Kunden entwickle Ich mit der Hilfe von modernen
            Technologien digitale Produkte, die Emotionen auslösen, einen
            Mehrwert schaffen und das Leben anderer Menschen bereichern. Ich
            verbinde bei meiner Arbeit folgende Bereiche und lasse mich von
            diesen leiten:
          </MissionTextBox>
          <MissionTextBox
            ID="2"
            heading={'1. Philosophie '}
            direction={true}
            Table={LOGIC}
          >
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
            ID="3"
            heading={'2. Praxeologie '}
            direction={true}
            Table={LOGIC}
          >
            Die Praxologie liefert ein wichtiges tehoretisches Fundament meiner
            Arbeit, die von Carl Menger schon 1871 entwickelte subjektive Wert
            Theorie ist gerade heute in unserem digitalen Umfeld aktueller denn
            je, sie besagt kurz gefasst, das der Wert dem der Nutzer einem
            Produkt beimisst immer subjektiver Natur ist. Es geht also nicht
            mehr um objektive technische Kriterien, es geht um ein subjektives
            Gefühl. Ihr Kunde zu sein muss ein Erlebnis sein, das alle Sinne
            anspricht.
            <br />
            Die fünf zentralen Lehren der Praxologie sind einfach zu verstehen.
            1. Menschliches Handeln ist absichtsvoll. Es ist nicht zufällig. Es
            ist zielgerichtet. 2. Der Wettbewerb ist ein iterativer Prozess, der
            Zeit braucht und die Unwissenheit reduziert. 3. Wert ist subjektiv.
            Es gibt keinen objektiven Wert der für alle Menschen das gleiche
            bedeutet. 4. Der Unternehmer ist von zentraler Bedeutung für
            Wachstum und wirtschaftlichen Fortschritt. 5. Institutionen - die
            Regeln des Spiels - haben einen großen Einfluss auf die ökonomische
            Ergebnisse. Sich ständig ändernde Institutionen destabilisieren
            Märkte, weil sie sie nicht klar machen, was die Regeln sind und was
            sie werden könnten.
            <br />
            <br />
            Das größte Buch zu diesem Thema trägt den Titel "Human Action: A
            Treatise on Economics" und ist gleichzeitig das Hauptwerk des
            österreichischen Wirtschaftswissenschaftlers Ludwig von Mises.
            <br />
          </MissionTextBox>

          <MissionTextBox
            ID="4"
            heading={'Was ist digitale Produktentwicklung?'}
            direction={true}
            Table={LOGIC}
          >
            Wenn wir mithilfe der Philosophie den Sinn und die Grenzen von
            Technologie bestimmt haben und wenn wir mithilfe der Wissenschaft
            vom menschlichen Handeln (Praxeologie) erkannt haben, dass jeder
            Mensch im Grunde aus dem Motiv heraus handelt, einen subjektiven
            Zustand des Unbefriedigtsein in einen Zustand der Befriedigung zu
            verwandeln, haben wir eine Grundlage geschaffen, auf welcher sich
            ein strategisches Rahmenwerk für unternehmerisches Handel und noch
            spezifischer für die digitale Produktentwicklung ableiten lässt.
            <br />
            <br />
            Das Ziel der digitalen Produktentwicklung ist es, die Sinne unserer
            Zielgruppe anzusprechen, ihre Aufmerksamkeit zu erregen und dieser
            in Form von visueller Kommunikation ein Mehrwertangebot zu
            unterbreiten. Am Anfang kommuniziert der Anbieter also ein
            Mehrwertversprechen.
            <br />
            <br />
            Dieses Versprechen muss die Zielgruppe, die nach genau dem angeboten
            Mehrwert sucht, erreichen und sie motivieren, dieses in Anspruch zu
            nehmen. Wird das Versprechen erfüllt, erfährt der Nutzer ein
            positives Mehrwerterlebnis und stellt eine emotionale Verbindung zu
            dem Anbieter her.
            <br />
            <br />
            Digitale Produktentwicklung ist dabei ein ganzheitlicher Prozess,
            der die Bereich UX-Design, Grafikdesign, Branding, Service Design,
            Marketing, Projektmanagement, Webentwicklung, Busines Strategy und
            Content Managment verbindet und einschließt.
            <br />
            <br />
            Aus ethischer Perspektive ist die digitale Produktentwicklung wie
            jedes Werkzeug zunächst ein Wert neutraler (apolitischer) Prozess.
            Es liegt in der Verantwortung des Anwenders, für welche Zwecke er
            die Strategien und Methoden anwendet.
            <br />
            <br />
            Meinem eignen Gewissen folgend wende ich mein strategisches
            Rahmenwerk nur für Projekte an, die die folgenden Kriterien
            erfüllen:
            <br />
            <br />
            1. Ausschließlich Privatwirtschaft, keine Zusammenarbeit mit ganz
            oder teilweise staatlich subventionierten Unternehmen oder NGOs 2.
            Keine Mitarbeit an Projekten, die den menschlichen Geist in die
            Erscheinungswelt der Erscheinungswelt(Metavers) überführen wollen.
            3. Bevorzugte Arbeit an Projekten, die zur Realisation einer höheren
            Idee dienen, zur Entfaltung des menschlichen Geists, zur
            Selbsterkenntnis. Projekte, die lebensfördernd,
            gemeinschaftsgründend und weiterbildend sind.
            <br />
            <br />
          </MissionTextBox>
          <MissionTextBox
            ID="5"
            heading={'MEINE WERTE'}
            direction={true}
            Table={LOGIC}
          >
            - Ich begenge meinem Gegenüber auf Augenhöhe. - Das Leben ist ein
            endloser Lernprozess. - Ich übernehme Verantwortung für meine
            Resultate. - Technologie darf niemals Selbstzweck sein. -
            Selbstreflektion hilft mir mich in die Sichtweise meines Gegenübers
            hineinzuversetzen - Geistige Unabhänigkeit erlaubt es mir mich
            selbst und meine Umgebung kritisch zu hinterfragen.
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
`;

const FlexBox = styled.div`
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
`;
