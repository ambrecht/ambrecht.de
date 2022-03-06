import styled from 'styled-components';
import Image from 'next/image';
import Ich from '../public/ich.png';
import Unterschrift from '../public/unterschrift.png';
import Quote from './Quote2';
import { Gradient, MediaWidth } from '../Mixins/Mixins';

//LOGIC
const LOGIC = () => {};

//MARKUP
export default function MARKUP() {
  return (
    <META>
      <Container>
        <StyledImage>
          <Image
            className="Tino Ambrecht"
            src={Ich}
            alt="Picture of a computer"
            width={400}
            height={400}
            objectFit="cover"
          ></Image>
        </StyledImage>

        <Text>
          Mein Name ist <h1>Tino Ambrecht</h1>, in einer Welt, die vor allem von
          Spezialisten dominiert wird, hat es mich einige Zeit gekostet zu
          erkennen, dass ich ein Generalist bin und das dies gleichzeitig meine
          größte Stärke ist. Als Generalist brenne nicht für ein bestimmtes
          Thema, ich bin an vielen Dingen interessiert, ich beschäftige mich
          zeitweise sehr intensiv mit einem spezifischen Fachgebiet, solange bis
          ich die grundlegenden Prinzipien verstanden habe. Dann verknüpfe ich
          dieses Wissen mit den Erkenntnissen aus anderen Bereichen und erhalte
          so Stück für Stück ein Bild vom großen und Ganzen. Ihre
        </Text>
        <Quote autor="Fariduddin Attar - Die Konferenz der Vögel">
          Das Schicksalsrad will, dass Er dieses Geheimnis aufdeckt. Wer sonst
          könnte das durch Umherirren? Was ist das Schicksal, außer Suchen?
          Woher soll jemand wissen, was hinter dem Vorhang ist? Selbst wer
          einige Jahre gesucht hat, ist unfähig um diese Tür gekreist.
        </Quote>
        <Text>
          Bei meiner Arbeit im Team gelte ich als
          <h1> strategischer und intuitiver Denker</h1> als
          <h1>Geheimnissucher</h1>. Ich erforsche Ideen und gehe den Dingen auf
          den Grund. Es macht mir Spaß, gemeinsam einen Plan zu formulieren und
          Lösungen für komplexe Probleme zu entwickeln. Mein selbstreflektierter
          Charakter hilft mir dabei, mich in den Nutzer einzufühlen und den
          Sachverhalt aus verschiedenen Blickwinkeln zu betrachten. Ich habe
          außerdem einen ausgesprochnen <h1>Sinn für Ästhetik</h1>
          für mich ist die Schönheit ein Hinweis auf die Wahrheit, denn die
          Ordnung, die die Schönheit darstellt, ist eine Bestätigung für die
          objektive Richtigkeit einer Idee.
        </Text>
        <StyledImage>
          <Image
            className="Unterschrift"
            src={Unterschrift}
            alt="Picture of a computer"
            width={100}
            height={100}
          ></Image>
        </StyledImage>
      </Container>
    </META>
  );
}

//STYLE
const META = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  padding: 0% 0px 5% 0px;
  border-bottom: 5px solid white;
  margin-bottom: 10%;
`;

const StyledImage = styled.span`
  position: relative;
  float: left;
  opacity: 100%;

  shape-outside: polygon(
    4.8% 1.89%,
    29% 114.21%,
    77.6% 109.38%,
    73.4% 37.9%,
    65.2% 8.95%
  );

  &:after {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    border-radius: 50%;
    filter: blur(1.5rem);
    top: 0;
    left: 0;
    background: linear-gradient(
      to bottom,
      rgba(255, 0, 0, 0) 0%,
      rgba(100, 90, 250, 0.5) 100%
    );
    mix-blend-mode: saturation;
  }
`;

const Text = styled.span`
  max-width: 1000px;
  display: block;
  margin-top: 1rem;
  color: white;
  font-size: 1.5rem;
  font-weight: 300;
  text-align: justify;

  letter-spacing: 0.01em;
  ${MediaWidth}

  h1 {
    display: inline;
    color: white;
    font-size: 2rem;
    font-weight: 300;

    letter-spacing: 0.01em;
    ${Gradient}

    ${MediaWidth}
  }
`;
