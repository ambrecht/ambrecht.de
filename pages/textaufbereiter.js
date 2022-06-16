import styled from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';
import Container from '../components/Container';
import Navigation from '../components/Navigation';
import Heading from '../components/Heading';
import Footer from '../components/Footer';

import Head from 'next/head';
import Wordprocessor from '../components/Wordprocessor';

//LOGIC

//MARKUP
export default function MARKUP() {
  return (
    <Wrapper>
      <Head>
        <title>'Textaufbereiter'</title>
        <meta charSet="utf-8" />
        <title>Textaufbereiter</title>
        <link rel="shortcut icon" href="/favicon2.ico" />
        <link rel="canonical" href="http://mysite.com/example" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;800&display=swap"
          rel="stylesheet"
        />
        <meta
          property="title"
          content="Textaufbereiter für Schriftsteller, Texter, Autoren"
        />
        <meta
          property="description"
          content="Mit diesem Textaufbereiter kannst Zeilenumbrüche enfernen, Texte aufbereiten und Wörter zählen"
        />
        <meta
          property="keywords"
          content="Texte aufbereiten, Zeilenumbrüche entfernen, Wörter zählen, Text formatieren, Texte übersetzen"
        ></meta>

        <meta name="robots" content="all" />

        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <Container>
        <Navigation></Navigation>
        <>
          <Heading>Hier können Sie Ihre Texte formatieren:</Heading>
        </>
        <Wordprocessor></Wordprocessor>
      </Container>
      <Footer image="/art_01.png"></Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #293133;
`;
