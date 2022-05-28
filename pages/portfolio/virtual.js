import Navigation from '../../components/Navigation';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import Container from '../../components/Container';

import Background from '../../components/Background';
import Footer from '../../components/Footer';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Gradient, MediaWidth } from '../../Mixins/Mixins';

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
  const requestUrl = 'https://fast-tor-61669.herokuapp.com/api/protfolios/2';

  const response = await fetch(requestUrl);
  const data = await response.json();

  return { props: { portfolio: data } };
}

//STYLE
const Wrapper = styled.div`
  background-color: #293133;
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

  strong {
    ${Gradient}
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 34%;
  }
`;

const Headline = styled.h1`
  display: inline;
  text-align: block;
  max-inline-size: 60ch;
  ${Gradient};
  ${MediaWidth};
`;
