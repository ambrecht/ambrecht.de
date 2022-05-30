import styled from 'styled-components';

import Workspace from '../components/InteractiveTable/Index';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import Container from '../components/Container';
import Navigation from '../components/Navigation';
import Quote from '../components/Quote2';
import Footer from '../components/Footer';
import BoxItem from '../components/Portfolio/BoxItem';

import monoKultur from '../public/monoKultur.png';

//LOGIC
const LOGIC = () => {};

//MARKUP
export default function MARKUP() {
  return (
    <Wrapper>
      <Container>
        <Navigation></Navigation>
        <Space></Space>
        <Quote autor="Fariduddin Attar" image="/attar.png">
          Das Schicksalsrad will, dass Er dieses Geheimnis aufdeckt. Wer sonst
          könnte das durch Umherirren? Was ist das Schicksal, außer Suchen?
          Woher soll jemand wissen, was hinter dem Vorhang ist? Selbst wer
          einige Jahre gesucht hat, ist unfähig um diese Tür gekreist.
        </Quote>
        <Heading>Meine letzten Projekte:</Heading>
        <FlexBox>
          <BoxItem
            image="/monoKultur.png"
            title="MONOkultur"
            link="mono"
          ></BoxItem>
          <BoxItem
            image="/realvirtual.png"
            title="Real Virtual"
            link="virtual"
          ></BoxItem>
          <BoxItem
            image="/logo4444.jpg"
            title="Cafe der 16 Persönlichkeiten"
            link="cafe"
          ></BoxItem>
        </FlexBox>

        <Heading>Schauen Sie sich in meiner Werkstatt um:</Heading>
      </Container>
      <Workspace></Workspace>

      <Footer image="/art_02.png"></Footer>
    </Wrapper>
  );
}

//STYLE
const Wrapper = styled.div`
  overflow: hidden;
  background-color: #293133;
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Heading = styled.h1`
  border-top: 0.05em solid white;
  border-bottom: 0.05em solid white;
  padding: 2rem;

  display: block;
  color: white;
  font-size: 2rem;
  font-weight: 300;
  text-align: center;

  letter-spacing: 0.01em;

  background-image: linear-gradient(to right, #2393ff 0%, #5f1df2 100%);
  -webkit-background-clip: text;
  background-size: 100%;
  -webkit-text-fill-color: transparent;
`;

const Space = styled.div`
  width: 100vw;
  height: 10vh;
`;
