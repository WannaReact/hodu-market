import type { AppProps } from 'next/app';
import NavBar from 'components/NavBar';
import GlobalStyle from 'styles/GlobalStyle';
import { useRouter } from 'next/router';
import { AppContextType } from 'next/dist/shared/lib/utils';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { gnb } = pageProps;

  return (
    <>
      <GlobalStyle />
      <NavBar pathname={router.pathname} options={gnb} />
      <Component {...pageProps} />
    </>
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
