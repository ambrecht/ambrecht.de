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
          <Bild
            src={image}
            alt={alttext}
            width={250}
            height={250}
            layout=""
          ></Bild>
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
  font-size: 1.5em;
  line-height: 1.2;
  color: white;
  padding: 1em 0em 0em 5em;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border-left: 0.05em solid white;
  ${MediaWidth}
`;

const QuoteText = styled.div`
  &:before {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 15%;
    width: 10%;
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
    width: 10%;
    height: 20%;
    content: '';
    background: url('./close.svg') no-repeat;
    background-size: contain;
    z-index: -100;
    opacity: 80%;
  }
`;

const Autor = styled.p`
  height: 10vh;
  font-size: 2rem;
  font-weight: 400;

  ${Gradient}
  text-align: center;
  ${MediaWidth}

  &:after {
  }
`;

const Bild = styled(Image)``;
