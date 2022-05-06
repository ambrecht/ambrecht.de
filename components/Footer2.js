import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

//LOGIC
const LOGIC = () => {};

//MARKUP
export default function MARKUP() {
  return (
    <Footer>
      <Link href="/" passHref>
        <Bild src="/3DDREIECK.svg" alt="Logo" width={90} height={90}></Bild>
      </Link>
      <Link href="/" passHref>
        <Bild src="/3DDREIECK.svg" alt="Logo" width={90} height={90}></Bild>
      </Link>
      <Link href="/" passHref>
        <Bild src="/3DDREIECK.svg" alt="Logo" width={90} height={90}></Bild>
      </Link>
    </Footer>
  );
}

//STYLE
const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 4.5rem max(3rem, calc((100vw - 81rem) / 2));
`;

const Colum = styled.div`
display: flex;
flex-direction: column;
text-align: left
margin-left: 60px;`;

const Row = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-gap: 4rem;
`;

const Title = styled.span``;

const Bild = styled(Image)`
  opacity: 100%;
  mix-blend-mode: lighten;
  cursor: pointer;
`;
