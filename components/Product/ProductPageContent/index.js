import { priceFormatter } from '../../../utils/helpers';

function ProductPageContent({ product }) {
  const { title } = product;
  const { altText, originalSrc } = product.images.edges[0].node;
  console.log(product);
  return <h1>{title}</h1>;
}

export default ProductPageContent;
