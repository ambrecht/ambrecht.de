import styled from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';
import Container from '../components/Container';
import Navigation from '../components/Navigation';
import Heading from '../components/Heading';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Head from 'next/head';

//LOGIC

const Copy = (str) => {
  console.log('HIER', str);
  if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    return navigator.clipboard.writeText(str);
  return Promise.reject('The Clipboard API is not available.');
};

const Deepl = (str) => {
  const newPageUrl = `https://www.deepl.com/translator#en/de/${str}`;
  window.open(newPageUrl, '_blank'); //to open new page
};

const BreakRemove = (input) => {
  const removeLineBreaks = input.replace(/(\r\n|\n|\r)/gm, ' ');
  const removeWhiteSpace = removeLineBreaks.replace(/^\s+|\s+$/g, ' ');
  return removeWhiteSpace.trim();
};

const WordCount = (input) => {
  const regEx = input
    .replace(/(^\s*)|(\s*$)/gi, '')
    .replace(/[ ]{2,}/gi, ' ')
    .replace(/\n /, '\n');

  return regEx.split(' ').length;
};

//MARKUP
export default function MARKUP() {
  const [inputValue, setInputValue] = useState('');
  const [edited, setEdited] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const Remove = BreakRemove(inputValue);
    setEdited(Remove);
  }, [inputValue]);

  useEffect(() => {
    const counter = WordCount(edited);
    edited && setCount(counter);
  }, [edited]);

  return (
    <Wrapper>
      <Head>
        <title>'Digitale Produktentwicklung'</title>
        <meta charSet="utf-8" />
        <title>ambrecht.de</title>
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
        <WordProcessBox>
          <TextInput
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            type="text"
            placeholder="Geben Sie Ihren Text ein."
            required
          >
            <p>Textinput:</p>
            {inputValue}
          </TextInput>
          <CounterBox>
            <p>Wörter:</p>
            <WordCounter>{count}</WordCounter>
          </CounterBox>
        </WordProcessBox>
        <ButtonBox>
          <Button
            onClick={(e) => Copy(edited)}
            label="Kopieren ohne Zeilenumbrüche"
          ></Button>
          <Button
            onClick={(e) => Deepl(edited)}
            label="Deepl Translator"
          ></Button>
        </ButtonBox>
        ;<Output>{edited}</Output>
      </Container>
      <Footer image="/art_01.png"></Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #293133;
`;

const TextInput = styled.textarea`
  flex-grow: 5;
  background: rgba(0, 0, 0, 0.3);
  width: 50%;
  height: 10rem;
  padding: 1em;
  margin-bottom: 0.5rem;
  border: none;
  border-radius: 1rem;
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.3);
  transition: all 0.2s ease-in-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  font-weight: 300;

  @media (max-width: 768px) {
    width: 70vw;
  }

  &:hover {
    background-image: linear-gradient(to right, #2393ff 0%, #5f1df2 100%);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
    color: rgba(255, 255, 255, 1);
  }
`;
const Output = styled.p`
  box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 1);
`;

const WordCounter = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3em;
  height: 3em;
  text-align: center;
  border-radius: 10%;
  background-image: linear-gradient(to right, #2393ff 0%, #5f1df2 100%);
  box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  -webkit-text-fill-color: rgba(255, 255, 255, 1);
  color: rgba(255, 255, 255, 1);
`;

const WordProcessBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const CounterBox = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2rem;

  color: white;
  font-size: 2rem;
  font-weight: 300;
  text-align: center;

  letter-spacing: 0.01em;

  background-image: linear-gradient(to right, #2393ff 0%, #5f1df2 100%);
  -webkit-background-clip: text;
  background-size: 100%;
  -webkit-text-fill-color: transparent;
`;
