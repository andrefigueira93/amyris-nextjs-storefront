import Head from 'next/head';
import ProductPageContent from '../../components/Product/ProductPageContent';
import { getProduct, recursiveCatalog } from '../../lib/shopify';

const ProductPage = ({ product }) => {
  return (
    <>
      <Head>
        <title>Amyris | {product.title}</title>
      </Head>
      <ProductPageContent product={product} />
    </>
  );
};

export default ProductPage;

export async function getStaticPaths() {
  const products = await recursiveCatalog();

  const paths = products.map(({ node }) => {
    const product = String(node.handle);

    return {
      params: {
        product,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.product);

  return {
    props: {
      product,
    },
  };
}
