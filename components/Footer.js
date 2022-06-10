import styled from 'styled-components';
import { TextGradient, MediaWidth } from '../Mixins/Mixins';
import Image from 'next/image';

//LOGIC
const LOGIC = () => {};

//MARKUP
export default function MARKUP({ image }) {
  return (
    <Wrapper>
      <Footer image={image}></Footer>
      <ABSOLUT>
        <Footerbox>
          <Bild src="/3DDREIECK.svg" alt="Logo" width={250} height={250}></Bild>
          <span>
            Tino Ambrecht <br />
            Neue Bahnhofstr. 26 <br />
            10245 Berlin <br />
          </span>
          <span>tino@ambrecht.de</span>
        </Footerbox>
      </ABSOLUT>
      <Copy>
        COPYRIGHT ©1990-2022. Alle Rechte vorbehalten. Nicht autorisierte, ganze
        oder teilweise Reproduktion ist strengstens untersagt.
      </Copy>
    </Wrapper>
  );
}

//STYLE

const Wrapper = styled.div`
  font-weight: 300;
  font-size: 1em;
  position: relative;
  overflow: hidden;
  width: 99vw;
  height: 100vh;
`;

const Bild = styled(Image)`
  opacity: 200%;
  mix-blend-mode: lighten;
`;

const Footer = styled.div`
  ${MediaWidth}
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${(props) => `url(${props.image}) no-repeat top center`};
    background-size: cover;
    background-position: bottom;
    mix-blend-mode: hard-light;
    filter: grayscale(100%);
  }
`;

const Copy = styled.span`
  text-align: center;
  font-size: 0.5em;
  position: absolute;
  color: white;
  opacity: 80%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  bottom: 0;
`;

const Footerbox = styled.div`
  padding-top: ${({ theme }) => theme.padding.main};
  padding-left: ${({ theme }) => theme.padding.main};
  padding-right: ${({ theme }) => theme.padding.main};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: space-around;
  flex-wrap: wrap;

  color: white;
  text-shadow: 0em 2em 2em rgba(0, 0, 0, 0.9);
`;

const ABSOLUT = styled.div`
  position: absolute;
  width: 100vw;
  bottom: 10vh;
`;

const GradientSpan = styled.span`
  ${TextGradient}
`;
