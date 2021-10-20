import Image from 'next/image';
import ProductForm from '../ProductForm';
// import { priceFormatter } from '../../../utils/helpers';

function ProductPageContent({ product }) {
  const { title } = product;
  const { altText, originalSrc } = product.images.edges[0].node;
  console.log(product);
  return (
    <div className="flex flex-col justify-center items-center space-y-8 md:flex-row md:items-start md:space-y-0 md:space-x-4 lg:space-x-0 max-w-6xl w-11/12 mx-auto">
      <div className="w-full max-w-md boder bg-white rounded-2xl overflow-hidden shadow-lg md:w-1/2">
        <div className="relative h-96 w-full">
          <Image
            src={originalSrc}
            alt={altText}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <ProductForm product={product} />
    </div>
  );
}

export default ProductPageContent;
