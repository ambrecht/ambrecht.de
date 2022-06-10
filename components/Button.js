import styled from 'styled-components';
import { TextGradient, MediaWidth, ButtonGradient } from '../Mixins/Mixins';

export default function InputButton({ label, onClick }) {
  return (
    <Button onClick={onClick}>
      <Text>{label}</Text>
    </Button>
  );
}

//STYLE
const Text = styled.span`
  text-transform: lowercase;
  font-weight: 600;
  line-height: 1em;
  letter-spacing: 0.1em;
  ${TextGradient};
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
