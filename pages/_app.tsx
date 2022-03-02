import type { AppProps } from 'next/app';
import NavBar from '../components/NavBar';
import GlobalStyle from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <NavBar isHome />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
