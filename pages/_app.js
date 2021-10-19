import 'tailwindcss/tailwind.css';
import Application from '../components/Application';

function MyApp({ Component, pageProps }) {
  return (
    <Application>
      <Component {...pageProps} />
    </Application>
  );
}

export default MyApp;
