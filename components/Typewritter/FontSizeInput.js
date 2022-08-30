import styled from 'styled-components';

//LOGIC
const LOGIC = () => {};

//MARKUP
export default function MARKUP() {
  return (
    <FontInput
      type="number"
      min="4"
      step="0.5"
      max="32"
      value={size}
      onChange={(e) => setSize(e.target.value)}
    />
  );
}

//STYLE
const FontInput = styled.input``;
