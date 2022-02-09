import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  :root {


    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,500;1,100;1,200&display=swap');
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
      <Normalize />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
