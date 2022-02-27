import styled from 'styled-components';

//LOGIC
const LOGIC = () => {};

//MARKUP
export default function MARKUP({ children, autor }) {
  return (
    <Wrapper>
      <Container>
        <Text>
          <h2>”</h2>
          {children}
          <h2>„</h2>
          <h1> ― &nbsp; {autor}</h1>
        </Text>
      </Container>
    </Wrapper>
  );
}

//STYLE
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  padding: 5% 0px 5% 0px;
  margin-top: 10%;
  border-top: 5px solid white;
  border-bottom: 5px solid white;
  margin-bottom: 10%;
`;

const Text = styled.span`
  max-width: 1000px;
  display: block;
  margin-top: 1rem;
  color: white;
  font-size: 1.5rem;
  font-weight: 300;
  text-align: justify;

  letter-spacing: 0.01em;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  h1 {
    display: block;
    color: white;
    font-size: 2rem;
    font-weight: 300;

    letter-spacing: 0.01em;
    word-spacing: -0.2em;

    background-image: linear-gradient(
      45deg,
      rgba(35, 147, 255, 1) 35%,
      rgba(95, 29, 242, 1) 100%
    );
    -webkit-background-clip: text;
    background-size: 100%;
    -webkit-text-fill-color: transparent;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  h2 {
    font-size: 2rem;
    display: inline;
    background-image: linear-gradient(
      45deg,
      rgba(35, 147, 255, 1) 35%,
      rgba(95, 29, 242, 1) 100%
    );
    -webkit-background-clip: text;
    background-size: 100%;
    -webkit-text-fill-color: transparent;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
