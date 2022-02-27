import styled from 'styled-components';
import Burger from './Burger';
import Menu from './Menu';
import React, { useState } from 'react';
//LOGIC
const LOGIC = () => {};

//MARKUP
export default function MARKUP() {
  const [open, setOpen] = useState(false);
  const node = React.useRef();
  return (
    <div>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}
