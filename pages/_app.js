import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import HeadMeta from '../components/HeadMeta';

const GlobalStyle = createGlobalStyle`
  :root {

     --measure: 60ch;


    
    font-family: 'Poppins', sans-serif;
    font-size:  clamp(1.3rem,1.4vw,2.3rem);
    margin: 0 auto;
    box-sizing: border-box;
    letter-spacing: 0.1em;

  
   
   
    
    

      


  }
  html:focus-within {
  scroll-behavior: smooth;
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
