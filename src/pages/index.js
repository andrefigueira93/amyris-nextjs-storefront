import Head from 'next/head';
import ProductList from '../components/Product/ProductList';
import { getProductsInCollection } from '../lib/shopify';

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Amyris Next.js Storefront</title>
      </Head>
      <div>
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
