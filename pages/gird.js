import styled from 'styled-components';
import Articel from '../components/Articel';

//LOGIC
const LOGIC = () => {};

//MARKUP
export default function MARKUP() {
  return (
    <Wrapper>
      <Articel image="/../public/Bilder/art_01.png" alttext="Test"></Articel>
      <Articel image="/../public/Bilder/art_01.png" alttext="Test"></Articel>
      <Articel image="/../public/Bilder/art_01.png" alttext="Test"></Articel>
      <Articel image="/../public/Bilder/art_01.png" alttext="Test"></Articel>
      <Articel image="/../public/Bilder/art_01.png" alttext="Test"></Articel>
      <Articel image="/../public/Bilder/art_01.png" alttext="Test"></Articel>
      <Articel image="/../public/Bilder/art_01.png" alttext="Test"></Articel>
    </Wrapper>
  );
}

//STYLE
const Wrapper = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);
`;
