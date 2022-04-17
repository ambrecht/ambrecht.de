import styled from 'styled-components';

//LOGIC
const LOGIC = () => {};

//MARKUP
export default function TableOfContents() {
  return (
    <Nav aria-label="Table of contents">
      <ul>
        <li>
          <a href={`#1`}>Meine Mission</a>
        </li>
        <li>
          <a href={`#2`}>Das philosophische Fundament</a>
        </li>
        <li>
          <a href={`#3`}>Die Wissenschaft vom menschlichen Handeln</a>
        </li>
        <li>
          <a href={`#4`}>Digitale Produktentwicklung</a>
        </li>
        <li>
          <a href={`#5`}>Meine Werte</a>
        </li>
      </ul>
    </Nav>
  );
}

//STYLE
const Nav = styled.nav`

  height: auto;
  position: sticky;
  top: 10%; /* How far down the page you want your ToC to live */

  ul {
         text-align: left;
}
        
        li {
            width: 10%;
            display: block;
            margin-bottom: 1em;

            a {
                color: #FFFFFF;
  text-decoration: none;
            }

        }
}
  }
`;
