import React, { useRef, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

//MARKUP
export default function MARKUP({ children }) {
  return <Container>{children}</Container>;
}

//STYLE
const Container = styled.div`
  position: relative;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-top: 3em;
  padding-left: ${({ theme }) => theme.padding.main};
  padding-right: ${({ theme }) => theme.padding.main};
  z-index: 10;
`;
