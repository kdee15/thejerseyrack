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
    componentHeroBanner (id:"3CecxOEDYMpLWodUQPQSnh") {
      title
      subtitle
      homepageBanner
      logo {
        title
        url
        width
        height
      }
      backgroundImage {
        title
        url
        width
        height
      }
      backgroundImageMobile {
        title
        url
        width
        height
      }
    }
    componentFooter (id:"56yTRJ5YQghOlhHJli7HBx") {
      title
      logo {
        title
        url
        width
        height
      }
      image {
        title
        url
        width
        height
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

export const COLLECTION_LIST = `
query GetHome {

    pageBrandCollectionCollection {
        items {
            title
            slug
            videoEmbedLink
            imageExtra {
                url
                width
                height
                title
            }
            imageSmall {
                url
                width
                height
                title
            }
            image {
                url
                width
                height
                title
            }
            ... on PageBrandCollection {
                title
                videoEmbedLink
                image {
                    url
                    width
                    height
                    title
                }
                productLink {
                    title
                    slug
                    price
                    description {
                        json
                    }
                    previewImage {
                        title
                        url
                        width
                        height
                    }
                    featureListCollection {
                        items {
                            title
                        }
                    }
                }
            }
        }
    }

  componentHeroBanner (id:"3CecxOEDYMpLWodUQPQSnh") {
    title
    subtitle
    homepageBanner
    logo {
      title
      url
      width
      height
    }
    backgroundImage {
      title
      url
      width
      height
    }
    backgroundImageMobile {
      title
      url
      width
      height
    }
  }
  componentMenu (id:"2omEAFPnQJklNZM8GmLp51") {
    title 
    linkListCollection {
      items {
        title
        url
        isExternal
        customClass
      }
    }
  }
  componentFooter (id:"56yTRJ5YQghOlhHJli7HBx") {
    title
    logo {
      title
      url
      width
      height
    }
    image {
      title
      url
      width
      height
    }
  }
}
`;
