import styled from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';
import Container from '../components/Container';
import Navigation from '../components/Navigation';
import Heading from '../components/Heading';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Head from 'next/head';
import { TextGradient, MediaWidth, Gradient } from '../Mixins/Mixins';

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
  );
}

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
    background-image: ${Gradient};
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
    color: rgba(255, 255, 255, 1);
  }
`;

const WordCounter = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3em;
  height: 3em;
  text-align: center;
  border-radius: 10%;
  background-image: ${Gradient};
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

  background-image: ${Gradient};
  -webkit-background-clip: text;
  background-size: 100%;
  -webkit-text-fill-color: transparent;
`;
