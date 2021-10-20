import 'tailwindcss/tailwind.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import Application from '../components/Application';
import ShopProvider from '../context/shopContext';
import { useRouter } from 'next/dist/client/router';

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
