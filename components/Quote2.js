import styled from 'styled-components';

//LOGIC
const LOGIC = () => {};

//MARKUP
export default function MARKUP() {
  return (
    <BlockQuoteBox>
      <QuoteText>
        Mit meinen Sinn für Ästhetik, erreiche ich Menschen, schaffe Werte und
        löse Emotionen aus. Egal ob es um Screendesign, Logo-Design oder die
        Entwicklung eines komplexen Design-System geht. Mit meinen Sinn für
        Ästhetik, erreiche ich Menschen, schaffe Werte und löse Emotionen aus.
        Egal ob es um Screendesign, Logo-Design oder die Entwicklung eines
        komplexen Design-System geht.Mit meinen Sinn für Ästhetik, erreiche ich
        Menschen, schaffe Werte und löse Emotionen aus. Egal ob es um
        Screendesign, Logo-Design oder die Entwicklung eines komplexen
        Design-System geht.Mit meinen Sinn für Ästhetik, erreiche ich Menschen,
        schaffe Werte und löse Emotionen aus. Egal ob es um Screendesign,
        Logo-Design oder die Entwicklung eines komplexen Design-System geht.
      </QuoteText>
      <br />- Tino Ambrecht
    </BlockQuoteBox>
  );
}

//STYLE
//quotes: "\201""\201D""\2018""\2019";
const BlockQuoteBox = styled.blockquote`
  .quote {
    max-width: 1000px;

    font-size: 1em;
    line-height: 1.2;
    color: #dadada;
    padding: 40px 40px 40px 50px;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
  }
  .quote:before {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 10px;
    width: 70px;
    height: 60px;
    content: '';
    background: url('./open.svg') no-repeat;
    background-size: cover;
    z-index: -100;
    opacity: 80%;
  }
  .quote:after {
    display: inline-block;
    position: absolute;
    bottom: 20px;
    right: 50px;
    width: 70px;
    height: 65px;
    content: '';
    background: url('./close.svg') no-repeat;
    background-size: cover;
    z-index: -100;
    opacity: 80%;
  }
`;

const QuoteText = styled.div`
  max-width: 1000px;
  font-size: 1em;
  line-height: 1.2;
  color: #dadada;
  padding: 40px 40px 40px 50px;
  display: inline-block;
  position: relative;
  box-sizing: border-box;

  &:before {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 10px;
    width: 10%;
    height: 20%;
    max-height: 300px;
    content: '';
    background: url('./open.svg') no-repeat;
    background-size: contain;
    z-index: -100;
    opacity: 80%;
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
