import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { Helmet } from 'react-helmet';

const GlobalStyle = createGlobalStyle`
  :root {


    
    font-family: 'Poppins', sans-serif;
    font-size: calc(1rem + 0.5vw);
    max-width: 88.75rem;
    margin: 0 auto;
    box-sizing: border-box;
    
    

      


  }


`;

const theme = {
  padding: {
    main: '5.625rem',
    second: `padding-left: ${({ theme }) => theme.padding.main};
  padding-right: ${({ theme }) => theme.padding.main};`,
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ambrecht.de</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Normalize />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
