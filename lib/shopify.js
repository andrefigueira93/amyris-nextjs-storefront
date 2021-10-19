const domain = process.env.SHOPIFY_STOREFRONT_DOMAIN;
const storefrontToken = process.env.SHOPIFY_STOREFRONT_TOKEN;

async function ShopifyData(query) {
  const URL = `https://${domain}/api/2021-10/graphql.json`;

  const options = {
    endpoint: URL,
    method: 'POST',
    headers: {
      'X-Shopify-Storefront-Acess-Token': storefrontToken,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(URL, options).then((res) => response.json());

    return data;
  } catch (error) {
    throw new Error('Products not fetched');
  }
}

export async function getProductsInCollection(collection) {
  const query = `
        {
            collection(handle: "${collection}") {
              title
              products(first: 25) {
                edges {
                  node {
                    id
                    title
                    handle
                    images(first: 5) {
                      edges {
                        node {
                          originalSrc
                          altText
                        }
                      }
                    }
                  }
                }
              }
            }
          }          
        `;
  const response = await ShopifyData(query);

  const allProducts = response.data.collection.products.edges
    ? response.data.collection.products.edges
    : [];

  return allProducts;
}
