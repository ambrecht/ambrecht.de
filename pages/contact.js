import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import ContactForm from '../components/ContactForm2/Index.js';
import Container from '../components/Container';
import Navigation from '../components/Navigation';
import Heading from '../components/Heading';
import Footer from '../components/Footer';
import Quote from '../components/Quote2';

//LOGIC
const LOGIC = () => {};

//MARKUP
export default function MARKUP() {
  const [messageIsSend, setMessageSend] = useState(false);
  const [formData, setFormData] = useState(null);

  const sendState = (data) => {
    setFormData(data);
  };

  useEffect(() => {
    formData && setMessageSend(true);
    formData && onSend(formData);
  }, [formData]);

  const onSend = async (data) => {
    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify({
        email: data.E_Mail,
        name: data.Name,
        message: data.Nachricht,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();
    if (error) {
      console.log('ERROR', error);
      return;
    }
  };

  return (
    <Wrapper>
      <Container>
        <Navigation></Navigation>
        {!messageIsSend && (
          <>
            <Heading>
              Lassen Sie uns über Ihr nächstes Projekt sprechen:
            </Heading>
            <ContactForm sendState={sendState}></ContactForm>
          </>
        )}
        {messageIsSend && (
          <>
            <Heading>Danke für Ihre Nachricht!</Heading>
            <Quote
              image="/emerson.png"
              alttext="Emerson"
              autor="Ralph Waldo Emerson"
            >
              Ich bin nur der, der den Zug beginnt. ›Alle, die in Schönheit
              gehn, werden in Schönheit auferstehn ...‹ Unser Wille ist nur der
              Wind, der uns drängt und dreht, weil wir selber die Sehnsucht
              sind, die in Blüten steht. ... da kann ich nichts als leise sein
              und Atem holen – tief. Ich stelle einfach Versuche an, ein end-
              los Suchender mit keiner Vergangenheit hinter mir.
            </Quote>
          </>
        )}
      </Container>
      <Footer image="/art_01.png"></Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #293133;
`;
