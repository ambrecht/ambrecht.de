import Image from 'next/image';

import styled from 'styled-components';
import Workspace from '../../public/P1100597.jpg';
import Blase from './Blase';
import InfoButtons from './InfoButtons';
import React, { useState, useEffect } from 'react';

//MARKUP
export default function MARKUP(props) {
  const [ID, setID] = useState(0);
  const select = (id) => {
    setID(id);
  };

  return (
    <STYLE>
      <Image src={Workspace} alt="Workspace" layout="intrinsic"></Image>
      <InfoButtons onEnter={select}></InfoButtons>
      <Blase ID={ID}></Blase>
    </STYLE>
  );
}

//STYLE
const STYLE = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;
