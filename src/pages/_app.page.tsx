import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { AppContextType } from 'next/dist/shared/lib/utils';
import { SessionProvider } from 'next-auth/react';
import NavBar from 'src/components/NavBar';
import GlobalStyle from 'src/styles/GlobalStyle';
import '@styles/font.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { gnb } = pageProps;

  return (
    <SessionProvider>
      <GlobalStyle />
      <NavBar pathname={router.pathname} options={gnb} />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

MyApp.getInitialProps = async ({ ctx, Component }: AppContextType) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default MyApp;
