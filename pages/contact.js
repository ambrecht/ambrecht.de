import styled from 'styled-components';
import ContactForm from '../components/ContactForm/Index.js';
import Container from '../components/Container';
import Navigation from '../components/Navigation';
import Heading from '../components/Heading';

//LOGIC
const LOGIC = () => {};

//MARKUP
export default function MARKUP() {
  return (
    <Container>
      <Navigation></Navigation>
      <Heading>Lassen Sie uns über Ihr nächstes Projekt sprechen:</Heading>
      <ContactForm></ContactForm>
    </Container>
  );
}
