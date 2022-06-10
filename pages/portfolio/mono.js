import Navigation from '../../components/Navigation';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import Container from '../../components/Container';
import HeroMessage from '../../components/HeroMessage';
import Background from '../../components/Background';
import Footer from '../../components/Footer';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { TextGradient, MediaWidth } from '../../Mixins/Mixins';

//LOGIC
const LOGIC = () => {};

//MARKUP
export default function MARKUP({ portfolio }) {
  console.log(portfolio);
  const { Description } = portfolio.data.attributes;
  const { headline } = portfolio.data.attributes;

  return (
    <Wrapper>
      <Background></Background>

      <Container>
        <Navigation></Navigation>
        <Space></Space>
        <Text>
          <Space></Space>
          <Headline>{headline}</Headline>
          <ReactMarkdown>{Description}</ReactMarkdown>
        </Text>
      </Container>

      <Footer image="/art_04.png"></Footer>
    </Wrapper>
  );
}

export async function getStaticProps() {
  const requestUrl = 'https://fast-tor-61669.herokuapp.com/api/protfolios/1';

  const response = await fetch(requestUrl);
  const data = await response.json();

  return { props: { portfolio: data } };
}

//STYLE
const Wrapper = styled.div`
  background-color: #293133;
  overflow: hidden;
`;

const Space = styled.div`
  width: 100vw;
  height: 13vh;
`;

const Text = styled.div`
  font-size: 1em;
  line-height: 1.4em;
  color: white;
  padding: 1em 0em 3em 5em;
  text-align: block;
  ${MediaWidth}
  display: block;
  position: relative;
  right: 0;
  max-width: 1300px;

  strong {
    ${TextGradient}
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-height: 66vh;
    max-width: 100%;
  }
`;

const Headline = styled.h1`
  display: inline;
  text-align: block;
  max-inline-size: 60ch;
  ${TextGradient};
  ${MediaWidth};
`;
