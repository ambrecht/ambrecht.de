import styled from 'styled-components';
import Card from './card';

//LOGIC
const LOGIC = () => {};

//MARKUP
export default function MARKUP() {
  return (
    <STYLE>
      <Card bild={'/art_01.png'}></Card>
      <Card bild={'/art_02.png'}></Card>
      <Card bild={'/art_03.png'}></Card>
    </STYLE>
  );
}

//STYLE
const STYLE = styled.div`
  box-sizing: border-box;
  width: 99%;
  justify-content: center;
  display: flex;
  row-gap: 1rem;
  column-gap: 0rem;
  overflow: hidden;
`;
