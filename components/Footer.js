import styled from 'styled-components';
import { Gradient, MediaWidth } from '../Mixins/Mixins';

//LOGIC
const LOGIC = () => {};

//MARKUP
export default function MARKUP({ image }) {
  return (
    <Wrapper>
      <Footer image={image}></Footer>
      <ABSOLUT>
        <Footerbox>
          <span>
            Tino Ambrecht <br />
            Neue Bahnhofstr. 26 <br />
            10245 Berlin <br />
          </span>
          <span>tino@ambrecht.de</span>
          <GradientSpan>Geheimnissucher</GradientSpan>
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
  position: relative;
  overflow: hidden;
  width: 99vw;
  height: 100vh;
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
  border-top: 0.1em solid white;
  padding-top: ${({ theme }) => theme.padding.main};
  padding-left: ${({ theme }) => theme.padding.main};
  padding-right: ${({ theme }) => theme.padding.main};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  align-content: space-around;

  color: white;
`;

const ABSOLUT = styled.div`
  position: absolute;
  width: 100vw;
  bottom: 30%;
`;

const GradientSpan = styled.span`
  ${Gradient}
`;
