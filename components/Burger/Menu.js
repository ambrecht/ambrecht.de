import styled from 'styled-components';
import { TextGradient, MediaWidth } from '../../Mixins/Mixins';

//LOGIC
const LOGIC = () => {};

//MARKUP
export default function Menu({ open }) {
  return (
    <StyledMenu open={open}>
      <a href="/mission">Meine Mission</a>
      <a href="/prozess">Mein Prozess</a>
      <a href="/arbeit">Meine Arbeit</a>
      <a href="/contact">Kontakt</a>
    </StyledMenu>
  );
}

//STYLE
const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #effffa;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  text-align: left;
  padding: 1em;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 1;
  width: 100%;

  a {
    font-size: 1.5em;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      ${TextGradient}
      text-transform: capitalize;
    }
  }
`;
