import Head from 'next/head';
import ProductList from '../components/ProductList';
import { getProductsInCollection } from '../lib/shopify';

export default function Home({ products }) {
  console.log(products);
  return (
    <>
      <Head>
        <title>Amyris Next.js Storefront</title>
      </Head>
      <div>
        <h1 className="text-3xl">Amyris Next-js Storefront</h1>
        <ProductList products={products} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: {
      products,
    },
  };
}
