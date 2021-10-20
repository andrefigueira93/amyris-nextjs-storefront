import ProductOptions from '../ProductOptions';
import { useState } from 'react';
import { priceFormatter } from '../../../utils/helpers';
import { useShopify } from '../../../context/shopContext';

const ProductForm = ({ product }) => {
  const { addToCart } = useShopify();
  const { title, handle, variants, options } = product;

  const allVariantOptions = variants.edges?.map((variant) => {
    const allOptions = {};
    const { node } = variant;

    node.selectedOptions.map((item) => {
      allOptions[item.name] = item.value;
    });

    return {
      id: node.id,
      title,
      handle,
      image: node.image?.originalSrc,
      options: allOptions,
      variantTitle: node.title,
      variantPrice: node.priceV2.amount,
      variantQuantity: 1,
    };
  });

  const defaultValues = {};
  product.options.map(({ name, values }) => {
    defaultValues[name] = values[0];
  });

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0]);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);

  function setOptions(name, value) {
    setSelectedOptions((prevState) => {
      return { ...prevState, [name]: value };
    });

    const selection = {
      ...selectedOptions,
      [name]: value,
    };

    allVariantOptions.map((item) => {
      if (JSON.stringify(item.options) === JSON.stringify(selection)) {
        setSelectedVariant(item);
      }
    });
  }

  return (
    <div className="rounded-2xl p-4 shadow-lg flex flex-col w-full md:w-1/3">
      <h2 className="text-2xl font-bold">{title}</h2>
      <span className="pb-3">
        {priceFormatter.format(variants.edges[0].node.priceV2.amount)}
      </span>
      {options.map(({ name, values }) => (
        <ProductOptions
          key={`key-${name}`}
          name={name}
          values={values}
          selectedOptions={selectedOptions}
          setOptions={setOptions}
        />
      ))}
      <button
        onClick={() => {
          addToCart(selectedVariant);
        }}
        className="bg-black rounded-lg text-white px-2 py-3 mt-3 hover:bg-gray-800"
      >
        Add To Card
      </button>
    </div>
  );
};

export default ProductForm;
