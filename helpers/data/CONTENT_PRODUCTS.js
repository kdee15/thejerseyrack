export const PROJECT_CONTENT = `
  query GetProduct($slug: String!) {
    pageProductCollection(where: { slug: $slug }, limit: 1) {
      items {
        title
        slug
      }
    }
  }
`;

export const PROJECT_SLUG = `
query {
  pageProductCollection {
      items {
        slug
      }
    }
}
`;
