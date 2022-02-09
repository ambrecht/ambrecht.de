import styled from 'styled-components';
import Technologie from '../../public/Icons/Technologie.svg';
import Image from 'next/image';
//LOGIC
const LOGIC = () => {};

//MARKUP
export default function MARKUP(props) {
  return (
    <Background background={props.bild}>
      <Card>
        <Foreground></Foreground>
        <Image src={Technologie} alt="Desktop" layout="intrinsic" />

        <Head>Technolgie</Head>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quam
          leo, fringilla sit amet diam ac, condimentum tristique nisi. Duis
          eleifend odio dui, et fermentum augue bibendum nec. Cras id sem at
          dolor tempor euismod.
        </Text>
      </Card>
    </Background>
  );
}

//STYLE

const Background = styled.div`
  width: 32vw;
  height: 100vh;
  background: ${(props) => `url(${props.background}) no-repeat top center`};
  background-size: cover;
  z-index: -99;
`;

const Foreground = styled.div`
  position: absolute;
  width: 31vw;
  height: 100vh;

  background: radial-gradient(
    circle,
    rgba(35, 147, 255, 1) 0%,
    rgba(95, 29, 242, 1) 100%,
    rgba(255, 255, 255, 1) 100%
  );

  opacity: 100%;
  z-index: -99;
  mix-blend-mode: darken;
`;

const Card = styled.div`
  mix-blend-mode: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 31vw;
  height: 100vh;
`;

const Head = styled.span`
  mix-blend-mode: none;
  color: grey;
  font-size: 2rem;
`;

const Text = styled.p`
  width: 80%;
  color: white;
  z-index: 10;
`;
