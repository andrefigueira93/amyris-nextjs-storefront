import Link from 'next/link';
import Image from 'next/image';

const ProductCard = ({ product }) => {
  const { handle, title } = product;
  const { altText, originalSrc } = product.images.edges[0].node;
  return (
    <Link href={`/product/${handle}`}>
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
      </a>
    </Link>
  );
};

export default ProductCard;
