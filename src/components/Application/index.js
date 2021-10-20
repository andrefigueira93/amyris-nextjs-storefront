import Footer from '../General/Footer';
import Header from '../General/Header';

const Application = ({ children }) => (
  <div className="flex flex-col justify-between min-h-screen">
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Application;
