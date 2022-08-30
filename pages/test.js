import styled from 'styled-components';
import { useRef, useEffect, useState } from 'react';
import axios from 'axios';

//LOGIC

//MARKUP
export default function MARKUP() {
  const [inputValue, setInputValue] = useState('');
  const inputElement = useRef(null);
  const [focusMessage, setMessage] = useState('Du bist fokusiert!');
  const [focus, setFocus] = useState(true);
  const [count, setCount] = useState({ blur: 0, focus: 0 });
  const [wordCount, setWordCount] = useState(0);
  const [fontSize, setFontsize] = useState(12);

  const WordCount = (input) => {
    const regEx = input
      .replace(/(^\s*)|(\s*$)/gi, '')
      .replace(/[ ]{2,}/gi, ' ')
      .replace(/\n /, '\n');

    return regEx.split(' ').length;
  };

  const sendText = async () => {
    try {
      const response = await axios.post('/api/sendText', {
        body: inputValue,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  useEffect(() => {
    const wordCounter = WordCount(inputValue);
    inputValue && setWordCount(wordCounter);
  }, [inputValue]);

  const handleClick = () => {
    inputElement.current.focus();
  };

  return (
    <Container>
      <Output size={fontSize} schema={false}>
        <Input
          type="text"
          ref={inputElement}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onBlur={(e) => {
            setFocus(false),
              setCount({ blur: count.blur + 1, focus: count.focus });
            sendText(inputValue);
          }}
          onFocus={() => {
            setFocus(true);
            setCount({ blur: count.blur, focus: count.focus + 1 });
          }}
        />
        {inputValue}
      </Output>
      <Options>
        <div>
          Schriftgröße:{' '}
          <FontsizeInput
            type="number"
            min="4"
            step="0.5"
            max="64"
            value={fontSize}
            onChange={(e) => setFontsize(e.target.value)}
          ></FontsizeInput>
        </div>
      </Options>
      {!focus && <Button onClick={handleClick}>Weiter Schreiben</Button>}
      <Message>
        Du warst jetzt schon {count.blur} mal abgelenkt und hast erst{' '}
        {wordCount} Wörter geschrieben!
      </Message>
      <Motivation>
        Schreibe als würde jemand mit dem Schwert hinter dir stehen!!!
      </Motivation>
    </Container>
  );
}

//STYLE
const Container = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 0.5em;
  grid-template-rows: 1fr 20vh;
`;

const Options = styled.div`
  grid-column: 5 / 6;
`;

const FontsizeInput = styled.input``;

const Button = styled.button``;

const Input = styled.input`
  :focus {
    outline: none;
    border: none;
  }
  height: 0;
  width: 0;
`;

const Message = styled.div`
  display: none;
`;
const Motivation = styled.div`
  display: none;
`;

const Output = styled.p`
  grid-column: 2/ 6;

  page-break-after: always;
  //margin: 27mm 16mm 27mm 16mm;
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
