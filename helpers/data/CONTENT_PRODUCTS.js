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
        description {
          json
        }
      sys {
        id
      }
        ... on PageProduct {
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
  }
}
`;
