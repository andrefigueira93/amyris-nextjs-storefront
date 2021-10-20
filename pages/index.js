import Head from 'next/head';
import Hero from '../components/Hero';
import ProductList from '../components/Product/ProductList';
import { getProductsInCollection } from '../lib/shopify';

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Amyris Next.js Storefront</title>
      </Head>
      <Hero />
      <ProductList products={products} />
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
