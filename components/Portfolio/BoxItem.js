import styled from 'styled-components';

import Link from 'next/link';
import Image from 'next/image';
import { Gradient, MediaWidth } from '../../Mixins/Mixins';

//LOGIC
const LOGIC = () => {};

//MARKUP
export default function MARKUP({ image, title, link }) {
  return (
    <Item href={`/portfolio/${link}`}>
      <Box>
        <Bild
          src={image}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
        <Overlay></Overlay>
        <Title className="Title">{title}</Title>
      </Box>
    </Item>
  );
}

//STYLE
const Item = styled(Link)`
  height: 0;
  background-color: red;
`;

const Overlay = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity ease 200ms;
  z-index: 99;
  background-image: linear-gradient(
    45deg,
    rgba(35, 147, 255, 1) 0%,
    rgba(95, 29, 242, 1) 100%
  );
  z-index: 900;
`;

const Title = styled.h1`
  font-size: 2vw;
  max-width: 100%;
  word-wrap: break-word;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  padding: 7%;
  text-align: center;
  z-index: 1000;
  opacity: 0;
  color: white;
`;

const Bild = styled(Image)`
  max-width: 100%;
`;

const Box = styled.div`
  position: relative;
  display: box;
  cursor: pointer;
  text-decoration: none;
  width: 20vw;
  height: 23vw;
  border-radius: 2%;
  &:hover ${Bild} {
    filter: invert(100%);
    transition: 0.3s;
  }
  &:hover ${Title} {
    opacity: 100%;
    transition: 1s;
  }
  &:hover ${Overlay} {
    opacity: 80%;
    transition: 0.3s;
  }
`;
