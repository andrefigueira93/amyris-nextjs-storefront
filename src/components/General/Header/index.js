import Link from 'next/link';
import { useShopify } from '../../../context/shopContext';
import MiniCart from '../../MiniCart';

const Header = () => {
  const { cart, cartOpen, setCartOpen } = useShopify();

  let cartQuantity = 0;

  cart.map((item) => (cartQuantity += item?.variantQuantity));

  return (
    <header className="border-b sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl">
        <Link href="/" passHref>
          <a className="cursor-pointer">
            <span className="text-lg pt-1 font-bold">Amyris Storefront</span>
          </a>
        </Link>
        <a
          className="text-md font-bold cursor-pointer"
          onClick={() => setCartOpen(!cartOpen)}
        >
          Cart ({cartQuantity})
        </a>
        <MiniCart cart={cart} />
      </div>
    </header>
  );
};

export default Header;
