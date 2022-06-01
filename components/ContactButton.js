import styled from 'styled-components';

//LOGIC

//MARKUP
export default function ContactButton({ children, fontsize }) {
  return (
    <Button size={fontsize}>
      <span>
        <Text>{children}</Text>
      </span>
    </Button>
  );
}

//STYLE

const Text = styled.span`
  background: linear-gradient(to right, #2393ff 0%, #5f1df2 100%);
  color: transparent;
  -webkit-background-clip: text;
  text-transform: capitalize;
  font-weight: 600;
  line-height: 1em;
  letter-spacing: 0.1em;
`;
const Button = styled.button`
  cursor: inherit;
  font-size: ${(props) => `${props.size}em`};
  padding: 1em 1.5em;
  border-radius: 3em;
  border: solid 0.2em transparent;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(101deg, #2393ff, #5f1df2);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2em 100em 1em white inset;
  transition-property: all;
  transition-duration: 0.5s;

  &:hover {
    box-shadow: none;
    ${Text} {
      color: white;
    }
  }
`;
