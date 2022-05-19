import styled from 'styled-components';

import Navigation from '../components/Navigation';
import React, { useRef, useEffect, useState, useCallback } from 'react';
import Container from '../components/Container';
import MissionTextBox from '../components/MissionTextBox';
import TableOfContents from '../components/tableOfContents/tableofContents';
import Quote from '../components/Quote2';
import { Gradient, MediaWidth } from '../Mixins/Mixins';
import Footer from '../components/Footer';
import Image from 'next/image';
import { fetchAPI } from '../lib/api';

//LOGIC

//MARKUP
export default function MARKUP({ missiontext }) {
  console.log(missiontext.data);
  return (
    <Wrapper>
      <Container>
        <Navigation></Navigation>

        <Quote
          autor="Hermes Trismegistus"
          image="/hermes.png"
          alttext="Hermes der Meister"
        >
          Die Schönheit des Guten umstrahlt den Geist gänzlich, läßt die ganze
          Seele wieder aufleuchten, zieht sie durch den Körper hinauf und
          verwandelt ihn ganz in wahres Sein.
        </Quote>
        <FlexBox>
          {missiontext.data.map((box) => {
            return (
              <MissionTextBox ID={box.id} heading={box.attributes.headline}>
                {box.attributes.content}
              </MissionTextBox>
            );
          })}
        </FlexBox>
      </Container>
      <Footer image="/art_01.png"></Footer>
    </Wrapper>
  );
}

export async function getStaticProps() {
  const res = await fetchAPI('/artikels');
  console.log(res);

  return { props: { missiontext: res } };
}

//STYLE
const Wrapper = styled.div`
  width: 100vw;
  background-color: #293133;
`;

const FlexBox = styled.div`
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
