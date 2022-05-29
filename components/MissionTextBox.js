import styled from 'styled-components';
import React from 'react';
import { Gradient, MediaWidth } from '../Mixins/Mixins';

//MARKUP
export default function MARKUP({ ID, heading, children, direction }) {
  return (
    <Text id={ID}>
      <details>
        <summary>
          <Heading>{heading}</Heading>
        </summary>
        {children}
      </details>
    </Text>
  );
}

//STYLE

const Text = styled.div`
  max-width: 600px;
  font-size: 1em;
  line-height: 1.4em;
  color: white;
  padding: 1em 0em 3em 5em;
  text-align: block;
  ${MediaWidth}
  display: block;
  position: relative;
  right: 0;
`;

const Heading = styled.h1`
  display: inline;
  text-align: block;
  max-inline-size: 60ch;
  ${Gradient};
  ${MediaWidth};
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 5));
`;
