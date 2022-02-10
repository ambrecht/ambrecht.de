import Navigation from '../components/Navigation';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import Container from '../components/Container';
import HeroMessage from '../components/HeroMessage';
import Background from '../components/Background';
import Rectangel from '../components/Rectangel';
import Workspace from '../components/InteractiveTable/Index';
import CardSlider from '../components/CardSlider/Index';

export default function Home() {
  return (
    <>
      <Background></Background>
      <Container>
        <Navigation></Navigation>
        <HeroMessage></HeroMessage>
      </Container>
    </>
  );
}
