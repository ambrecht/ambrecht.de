import styled from 'styled-components';
import Image from 'next/image';
import Ich from '../public/ich.png';

//LOGIC
const LOGIC = () => {};

//MARKUP
export default function MyImage() {
  return (
    <StyledImage>
      <Image
        src={Ich}
        alt="Tino Ambrecht"
        width={500}
        height={500}
        layout={`fill`}
        objectFit={`cover`}
      ></Image>
    </StyledImage>
  );
}

//STYLE

const StyledImage = styled.span`
  width: 20vw;
  height: 60vh;
  position: relative;
  top: 100px;
  float: right;
  opacity: 100%;

  shape-outside: polygon(
    4.8% 1.89%,
    29% 114.21%,
    77.6% 109.38%,
    73.4% 37.9%,
    65.2% 8.95%
  );
`;
