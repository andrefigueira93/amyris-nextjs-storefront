import { useRouter } from 'next/dist/client/router';
import 'tailwindcss/tailwind.css';
import Application from '../components/Application';
import ShopProvider from '../context/shopContext';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ShopProvider>
      <Application>
        <Component {...pageProps} key={router.asPath} />
      </Application>
    </ShopProvider>
  );
}

export default MyApp;
