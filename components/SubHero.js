import styled from 'styled-components';
import Image from 'next/image';
import Ich from '../public/ich.png';
import Unterschrift from '../public/unterschrift.png';

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
            width={500}
            height={500}
            objectFit="cover"
          ></Image>
        </StyledImage>

        <Text>
          Ihre <h1>externe Quelle für Innovation und Kreativität</h1>. Ich helfe
          Ihnen Lösungen zu entwickeln welche das Leben Ihrer Kunden verbessern.
        </Text>

        <Text>
          Am Ende eines Projekts zählen nicht die technischen Details, nicht die
          objektiv messbaren Kriterien, sondern es zählt unseren Nutzer zu
          beigstern und ein <h1>positives Mehrwerterlebnis</h1> zu schaffen.
        </Text>
        <StyledImage>
          <Image
            className="Unterschrift"
            src={Unterschrift}
            alt="Picture of a computer"
            width={200}
            height={200}
            objectFit="fill"
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
  padding: 5% 0px 5% 0px;
  margin-top: 10%;
  border-top: 5px solid white;
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
  padding-left: 3rem;
  max-width: 1000px;
  display: block;
  margin-top: 1rem;
  color: white;
  font-size: 2rem;
  font-weight: 300;
  text-align: justify;

  letter-spacing: 0.01em;
  word-spacing: -0.2em;

  h1 {
    display: inline;
    color: white;
    font-size: 2rem;
    font-weight: 300;

    letter-spacing: 0.01em;
    word-spacing: -0.2em;

    background-image: linear-gradient(
      45deg,
      rgba(35, 147, 255, 1) 35%,
      rgba(95, 29, 242, 1) 100%
    );
    -webkit-background-clip: text;
    background-size: 100%;
    -webkit-text-fill-color: transparent;
  }
`;
