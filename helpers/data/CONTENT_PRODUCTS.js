export const PRODUCT_CONTENT = `
  query GetProduct($slug: String!) {
    pageProductCollection(where: { slug: $slug }, limit: 1) {
      items {
        title
        slug
        price
        description {
          json
        }
        imagesCollection {
          items {
            title
            url
            width
            height
          }
        }
        featureListCollection {
          items {
            title
            featureOptions
          }
        }
      }
    }
  }
`;

export const PRODUCT_SLUG = `
query {
  pageProductCollection {
      items {
        slug
      }
    }
}
`;

export const PRODUCT_LIST = `
query GetHome {
  pageProductCollection {
    items {
        title
        slug
        ... on pageProduct {
          title
          isFeatured
          previewImage {
            title
            url
            width
            height
          }
        }
    }
  }
}
`;
