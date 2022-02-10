import styled from 'styled-components';
import Technologie from '../../public/Icons/Technologie.svg';
import Image from 'next/image';
//LOGIC
const LOGIC = () => {};

//MARKUP
export default function MARKUP(props) {
  return (
    <Blure>
      <Background background={props.bild}>
        <Card>
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
    </Blure>
  );
}

//STYLE

const Blure = styled.div`
  width: 32vw;
  height: 100vh;
  opacity: 100%;
  background: hsla(0, 100%, 0%, 0.53);
  box-shadow: 5px 3px 30px black;
  overflow: hidden;
`;

const Background = styled.div`
  width: 32vw;
  height: 100vh;
  background: ${(props) => `url(${props.background}) no-repeat top center`};
  background-size: cover;
  opacity: 80%;
  z-index: -99;
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
