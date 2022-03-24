import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import HeadMeta from '../components/HeadMeta';

const GlobalStyle = createGlobalStyle`
  :root {


    
    font-family: 'Poppins', sans-serif;
    font-size: calc(1rem + 0.5vw);
    margin: 0 auto;
    box-sizing: border-box;
    letter-spacing: 0.1em;
    

      


  }


`;

const theme = {
  padding: {
    main: '5.625rem',
  },
  colors: {
    background: '#212121',
    text: '#ffffff',
    brandblue: '#2393ff',
    brandpurpel: '#5f1df2',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <HeadMeta></HeadMeta>
      <Normalize />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
