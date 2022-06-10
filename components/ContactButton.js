import styled from 'styled-components';
import { TextGradient, MediaWidth, ButtonGradient } from '../Mixins/Mixins';

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
  font-weight: 600;
  line-height: 1em;
  letter-spacing: 0.1em;
  text-transform: lowercase;
`;
const Button = styled.button`
  cursor: inherit;
  font-size: ${(props) => `${props.size}em`};
  padding: 1em 1.5em;
  border-radius: 3em;
  border: solid 0.2em transparent;
  ${ButtonGradient};

  &:hover {
    box-shadow: none;
    ${Text} {
      color: white;
    }
  }
`;
