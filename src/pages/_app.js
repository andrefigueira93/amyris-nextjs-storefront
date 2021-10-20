import { useRouter } from 'next/dist/client/router';
import 'tailwindcss/tailwind.css';
import Application from '../components/Application';
import ShopProvider from '../context/shopContext';

function MyApp({ Component, pageProps }) {
  const { asPath } = useRouter();
  return (
    <ShopProvider>
      <Application>
        <Component {...pageProps} key={asPath} />
      </Application>
    </ShopProvider>
  );
}

export default MyApp;
