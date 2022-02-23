import styled from 'styled-components';
import Card from './card';

//LOGIC
const LOGIC = () => {};

//MARKUP
export default function MARKUP() {
  return (
    <STYLE>
      <Card headline="TECHNOLOGIE" icon="/Icons/Technologie.svg">
        Mit der Spezialisierung auf die JavaScript Umgebung und hier vorallem
        die React-Biblothek, verwandle ich Ihre Vision in technische Paramter.
        Die verschiedenen Technologien sind dabei aber niemals Selbstzweck,
        sondern immer nur Werkzeuge um ein bestimmtes Ziel zu erreichen.
      </Card>
      <Card headline="STRATEGIE" icon="/Icons/Strategie.svg">
        Als kritischer Denker nehme ich selten Dinge als gegeben hin. Ich
        versuche, die zugrunde liegende Natur eines jeden Problems zu verstehen,
        mit dem ich konfrontiert werde. Mit dieser herangehensweise erarbeite
        ich akurate Customer Journey Maps, führe Usability Tests durch und
        schaffe so eine ganzheitliche User Experience, welche die Zielgruppe
        begeistert.
      </Card>
      <Card headline="DESIGN" icon="/Icons/Design.svg">
        Mit meinen Sinn für Ästhetik, erreiche ich Menschen, schaffe Werte und
        löse Emotionen aus. Egal ob es um Screendesign, Logo-Design oder die
        Entwicklung eines komplexen Design-System geht.
      </Card>
    </STYLE>
  );
}

//STYLE
const STYLE = styled.div`
  box-sizing: border-box;
  width: 99vw;
  height: 50vh;
  justify-content: space-between;
  align-items: bottom;
  display: flex;
  row-gap: 1rem;
  column-gap: 0rem;
`;
