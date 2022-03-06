import styled from 'styled-components';

//LOGIC
const LOGIC = () => {};

//MARKUP
export default function MARKUP({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

//STYLE
const Wrapper = styled.h1`
  border-top: 0.05em solid white;
  border-bottom: 0.05em solid white;
  padding: 2rem;

  display: block;
  color: white;
  font-size: 2rem;
  font-weight: 300;
  text-align: center;

  letter-spacing: 0.01em;

  background-image: linear-gradient(to right, #2393ff 0%, #5f1df2 100%);
  -webkit-background-clip: text;
  background-size: 100%;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
