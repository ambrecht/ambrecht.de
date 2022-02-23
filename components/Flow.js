import styled from 'styled-components';
import Image from 'next/image';
import Heading from './Heading';

//LOGIC
const LOGIC = () => {};

//MARKUP
export default function MARKUP() {
  return (
    <Wrapper>
      <Heading>Der Weg zum positiven Mehrwerterlebnis:</Heading>
      <GridContainer>
        <Image
          src={'/Flow/Problem.svg'}
          alt="Desktop"
          width="3000"
          height="3000"
        />

        <Text>
          <h1>Phase 1</h1>
          Zunächst geht es vorallem darum die Zielgruppe kennenzulernen. Wer
          soll von dem zu entwicklenden Produkt angesprochen werden. Wie groß
          ist die Zielgruppe? Über welche Kanäle kann die Zielgruppe erreicht
          werden? Welche Wünsche, Bedürfnisse und Sehnsüchte hat die Zielgruppe?
        </Text>
      </GridContainer>
      <GridContainer>
        <Text>
          <h1>Phase 2</h1>
          Im zweiten Schritt wird ein langfristiges und inspiriendes Leitbild
          für das Produkt definiert. An diesem Zielbild werden alle weiteren
          Maßnahmen ausgerichtet und abgestimmt. Es gilt hier auf den Punkt zu
          bringen, warum gibt es das Produkt und welchen Mehrwert bietet es.
        </Text>
        <Image
          src={'/Flow/Vision.svg'}
          alt="Desktop"
          width="3000"
          height="3000"
        />
      </GridContainer>
      <GridContainer>
        <Image
          src={'/Flow/Ideen.svg'}
          alt="Desktop"
          width="3000"
          height="3000"
        />

        <Text>
          <h1>Phase 3</h1>
          Ist das Leibild definiert gilt es in kurzen kurzen Iterationszyklen
          unterschiedliche Ideen zu entwickeln. Ich greife hier auf verschiedene
          Kreativitätstechniken zurück. Danch werden die erfolgversprechendsten
          Ideen ausgewählt und als erste Prototypen umgesetzt um sie bei realen
          Nutzern zu testen.
        </Text>
      </GridContainer>
      <GridContainer>
        <Text>
          <h1>Phase 4</h1>
          Im letzen Schritt, werden alle Daten ausgewertet, die technischen
          Rahmenbedigungen festgelegt und in einem agilen Entwicklungsprozess,
          wird das endgültige Produkt implementiert. Hier gilt es die Vision in
          technische Parameter zu übersetzen und immer wieder zu evaluieren und
          zu korrigieren.
        </Text>
        <Image
          src={'/Flow/Implementieren.svg'}
          alt="Desktop"
          width="3000"
          height="3000"
        />
      </GridContainer>
    </Wrapper>
  );
}

//STYLE
const Wrapper = styled.div`
  padding-top: 3rem;
`;

const GridContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 2rem;

  width: 100%;
  height: 66.666vh;
`;

const Text = styled.span`
  padding-left: 3rem;
  max-width: 66%;
  display: block;
  margin-top: 1rem;
  color: white;
  font-size: 1.4rem;
  font-weight: 300;
  text-align: justify;

  letter-spacing: 0.01em;
  word-spacing: -0.2em;

  h1 {
    display: block;
    color: white;
    font-size: 1rem;
    font-weight: 300;

    letter-spacing: 0.01em;
    word-spacing: -0.2em;

    background-image: linear-gradient(to right, #2393ff 0%, #5f1df2 100%);
    -webkit-background-clip: text;
    background-size: 100%;
    -webkit-text-fill-color: transparent;
  }
`;
