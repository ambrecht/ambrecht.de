import { Children } from 'react';
import styled from 'styled-components';
import { Gradient, MediaWidth } from '../Mixins/Mixins';
import Image from 'next/image';

//LOGIC
const LOGIC = () => {};
//MARKUP
export default function MARKUP({ children, autor, image, alttext }) {
  return (
    <Wrapper>
      <BlockQuoteBox>
        <QuoteText image={image}>
          <BildCon>
            <Bild
              src={image}
              alt={alttext}
              width={250}
              height={250}
              layout=""
            ></Bild>
          </BildCon>
          {children}
        </QuoteText>

        <br />

        <Autor>- {autor}</Autor>
      </BlockQuoteBox>
    </Wrapper>
  );
}

//STYLE
//quotes: "\201""\201D""\2018""\2019";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BlockQuoteBox = styled.blockquote`
  max-width: 1000px;
  font-size: 1em;
  line-height: 1.4em;
  color: white;
  padding: 1em 0em 0em 5em;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  text-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.9);
  border-left: 0.05em solid white;
  ${MediaWidth}
  @media (max-width: 1300px) {
    font-size: 0.9em;
  }
`;

const QuoteText = styled.div`
  line-height: 1.5;
  letter-spacing: 0.08em;
  &:before {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 15%;
    width: 5%;
    height: 20%;
    max-height: 300px;
    content: '';
    background: url('./open.svg') no-repeat;
    background-size: contain;
    z-index: -100;
    opacity: 80%;
    text-align: block;
  }
  &:after {
    display: inline-block;
    position: absolute;
    bottom: 20px;
    right: 50px;
    width: 5%;
    height: 20%;
    content: '';
    background: url('./close.svg') no-repeat;
    background-size: contain;
    z-index: -100;
    opacity: 80%;
    @media (max-width: 1300px) {
      width: 5%;
    }
  }
`;

const Autor = styled.p`
  height: 10vh;
  font-size: 1rem;
  font-weight: 400;
  text-shadow: none;

  ${Gradient}
  text-align: center;
  ${MediaWidth}
  @media (max-width: 1300px) {
    font-size: 1.5em;
  }

  &:after {
  }
`;

const Bild = styled(Image)``;

const BildCon = styled.div`
  max-width: 200px;
  position: relative;
  float: left;
  opacity: 100%;

  shape-outside: circle(50%);

  @media (max-width: 768px) {
    width: 25vw;
    height: 25vw;
  }
  @media (max-width: 1300px) {
    width: 10vw;
    height: 10vw;
  }
`;
