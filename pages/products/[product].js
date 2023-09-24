import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Slider from "react-slick";
import ComponentCarouselImage from "../../components/molecules/componentCarouselImage/ComponentCarouselImage";
import classes from "./Projects.module.scss";

const {
  C_DELIVERY_KEY,
  C_GRAPHQL_URL,
} = require("../../helpers/contentful-config");
const {
  PRODUCT_CONTENT,
  PRODUCT_SLUG,
} = require("../../helpers/data/CONTENT_PRODUCTS");

/**
 * Initial page load to access users browser information
 *
 * @returns {JSX.Element}
 * @constructor
 */

export default function Product({ product }) {
  console.log("data", product);
  const { title, price, description, imagesCollection } = product;
  const images = imagesCollection.items;
  const settings = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
  };
  return (
    <div className={classes.oProductPage}>
      <div className={`container`}>
        <div className={`row`}>
          <div className={`col-12 col-md-6`}>
            <Slider {...settings}>
              {images.map((item, index) => (
                <ComponentCarouselImage item={item} key={index} />
              ))}
            </Slider>
          </div>
          <div className={`col-12 col-md-6`}>
            <h3>{title}</h3>
            <h5>{price}</h5>
            {description?.json ? (
              <div>{documentToReactComponents(description?.json)}</div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { product } = params;

  const result = await fetch(C_GRAPHQL_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${C_DELIVERY_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: PRODUCT_CONTENT,
      variables: {
        slug: product,
      },
    }),
  });

  if (!result.ok) {
    console.error(result);
    return {};
  }

  const { data } = await result.json();
  const [productData] = data.pageProductCollection.items;

  return {
    props: { product: productData },
  };
}

export async function getStaticPaths() {
  const result = await fetch(C_GRAPHQL_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${C_DELIVERY_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: PRODUCT_SLUG,
    }),
  });

  if (!result.ok) {
    return {};
  }

  const { data } = await result.json();
  const projectSlug = data.pageProductCollection.items;
  const paths = projectSlug.map(({ slug }) => {
    return {
      params: { product: slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
