import styled from 'styled-components';
import Link from 'next/link';
import Logo from '../public/logo.svg';
import Contact from '../public/kontakt.svg';
import Image from 'next/image';
import ContactButton from './ContactButton';

const Navigation = () => {
  return (
    <NavContainer>
      <div className="logo-container">
        <Link href="/" passHref>
          <a aria-hidden="true" role="img">
            <Image src={Logo} alt="Logo" layout="intrinsic" />
          </a>
        </Link>
      </div>
      <Link href="/" passHref>
        <a aria-hidden="true" role="img">
          <span>Meine Arbeit</span>
        </a>
      </Link>
      <Link href="/" passHref>
        <a aria-hidden="true" role="img">
          <span>Mein Leben</span>
        </a>
      </Link>
      <Link href="/" passHref>
        <a aria-hidden="true" role="img">
          <span>Mein Traum</span>
        </a>
      </Link>
      <div className="contact-container">
        <Link href="/contact" passHref>
          <a aria-hidden="true">
            <ContactButton></ContactButton>
          </a>
        </Link>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;

  gap: 10%;
  overflow: none;

  a {
    display: block;
    text-decoration: none;
    list-style-type: none;
    color: ${({ theme }) => theme.colors.text};

    text-transform: lowercase;
  }

  a > span:hover {
    border-bottom: 0.2em solid white;
    transition-property: all;
    transition-duration: 0.2s;
  }
  & .logo-container {
    margin-right: auto;

    a {
      padding: 0;
      width: 10em;
    }
  }

  .contact-container {
    margin-left: auto;
    a {
      padding: 0;
    }
  }
`;

export default Navigation;
