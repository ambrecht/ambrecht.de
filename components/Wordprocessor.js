import styled from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Footer from '../components/Footer';
import Button from '../components/Button';

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
  const [schema, setSchema] = useState(true);
  const [size, setSize] = useState(12);

  useEffect(() => {
    const Remove = BreakRemove(inputValue);
    setEdited(Remove);
  }, [inputValue]);

  useEffect(() => {
    const counter = WordCount(edited);
    edited && setCount(counter);
  }, [edited]);

  return (
    <Container>
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

      <Heading>Der Text in Schönschrift:</Heading>
      <FontInput
        type="number"
        min="4"
        step="0.5"
        max="32"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />
      <OutputBox>
        <Button
          onClick={(e) => setSchema(!schema)}
          label="Farbschema invertieren"
        ></Button>

        <Output size={size} schema={schema}>
          {edited}
        </Output>
      </OutputBox>
    </Container>
  );
}

const FontInput = styled.input``;

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
  size: 7in 9.25in;
  margin: 27mm 16mm 27mm 16mm;
  flex-grow: 5;
  box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 1);
  --color-text: ${(props) => (props.schema == true ? '#f4f4f4' : '#293133')};
  --color-bg: ${(props) => (props.schema == true ? '#293133' : '#f4f4f4')};
  font-family: 'Libre Caslon Text', serif;
  font-size: ${(props) => `${props.size}px`};
  color: var(--color-text);
  margin-block: 0 10vmin;
  font-weight: 700;
  text-indent: 2ch;
  word-break: normal;
  hyphens: auto;
  padding: 1em;

  line-height: 1.4;
  background-color: var(--color-bg);
  page-break-after: always;
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

const OutputBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;
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
