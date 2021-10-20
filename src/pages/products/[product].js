import Head from 'next/head';
import ProductPageContent from '../../components/Product/ProductPageContent';
import {
  getAllProducts,
  getProduct,
  recursiveCatalog,
} from '../../lib/shopify';

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

  const paths = products.map((item) => {
    const product = String(item.node.handle);

    return {
      params: { product },
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
