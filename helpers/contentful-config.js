const C_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const C_DELIVERY_KEY = process.env.CONTENTFUL_DELIVERY_KEY;
const C_GRAPHQL_URL = `https://graphql.contentful.com/content/v1/spaces/${C_SPACE_ID}/environments/master`;

module.exports = {
  C_DELIVERY_KEY,
  C_SPACE_ID,
  C_GRAPHQL_URL,
};
