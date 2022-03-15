import React, { useRef, useEffect, useState, useCallback } from 'react';
import Background from '../components/Background';
import styled from 'styled-components';
import Image from 'next/image';
import Logo from '../public/logo.svg';
import Link from 'next/link';

export default function Home() {
  return (
    <Wrapper>
      <Background></Background>
      <Container>
        <Link href="/" passHref>
          <a aria-hidden="true" role="img">
            <Image src={Logo} alt="Logo" layout="fill" />
          </a>
        </Link>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;

  width: 100vw;
  height: 100vh;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    width: 130vw;
    height: 100vh;
    top: -80%;
    background-color: #293133;
    transform: skewY(-5deg);
    opacity: 95%;
  }

  &:after {
    content: '';
    position: absolute;
    width: 100vw;
    height: 50vh;
    bottom: -35%;
    background-color: white;
    background-image: linear-gradient(
      45deg,
      rgba(35, 147, 255, 1) 0%,
      rgba(95, 29, 242, 1) 50%
    );

    z-index: 10000;
    opacity: 95%;
    transform: skewY(5deg);
  }
`;

const Container = styled.div`
  position: absolute;
  width: 10vw;
  height: 10vh;
  margin-top: 10vh;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
`;

const Mask = styled.div``;

const Quote = styled.span`
  position: relative;
  color: white;
  font-size: 3em;
  line-height: 1.5;
  letter-spacing: 0.3em;
  z-index: 100000;

  word-spacing: 0.6em;
  text-transform: uppercase;
  font-weight: 500;
  padding: 6em;
  padding-left: 15em;
`;
