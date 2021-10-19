import Link from 'next/link';
import Image from 'next/image';
import { priceFormatter } from '../../utils/helpers';

const ProductCard = ({ product }) => {
  const { handle, title } = product;
  const { altText, originalSrc } = product.images.edges[0].node;
  const price = product.priceRange.minVariantPrice.amount;
  return (
    <Link href={`/products/${handle}`}>
      <a className="group" href="">
        <div className="w-full bg-gray-200 rounded-3xl overflow-hidden">
          <div className="relative group-hover:opacity-75 h-72">
            <Image
              src={originalSrc}
              alt={altText}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-700">
          {priceFormatter.format(price)}
        </p>
      </a>
    </Link>
  );
};

export default ProductCard;