import styled from 'styled-components';
import Technologie from '../../public/Icons/Technologie.svg';
import Image from 'next/image';
//LOGIC
const LOGIC = () => {};

//MARKUP
export default function MARKUP(props) {
  return (
    <>
      <Card>
        <Image
          src={props.icon}
          width="100"
          height="100"
          alt="Desktop"
          layout="intrinsic"
        />

        <Head>{props.headline}</Head>
        <Text>{props.children}</Text>
      </Card>
    </>
  );
}

//STYLE

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;

  width: 31vw;
  height: 80vh;
  padding-top: 5rem;
  background: linear-gradient(
    45deg,
    rgba(35, 147, 255, 0.1) 35%,
    rgba(95, 29, 242, 0.1) 100%
  );
  border-radius: 5%;
  border: 5px solid white;
  span {
    padding-top: 3rem;
  }
`;

const Head = styled.span`
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
`;

const Text = styled.p`
  width: 80%;
  color: white;
  font-weight: 400;
  text-align: center;

  z-index: 10;
`;
