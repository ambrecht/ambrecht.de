import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import ContactForm from '../components/ContactForm2/Index.js';
import Container from '../components/Container';
import Navigation from '../components/Navigation';
import Heading from '../components/Heading';

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
    console.log('SUBMIT', formData);
    formData && onSend(formData);
  }, [formData]);

  const onSend = async (data) => {
    console.log(data);
    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify({
        email: data.E_Mail,
        name: data.Name,
        message: data.Message,
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
    } else {
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
          </>
        )}
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #293133;
  width: 100vw;
  height: 100vh;
`;
