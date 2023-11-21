import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Slider from "react-slick";
import ComponentCarouselImage from "../../components/molecules/componentCarouselImage/ComponentCarouselImage";
import classes from "./Products.module.scss";
import ComponentHeroBanner from "../../components/organisms/componentHeroBanner/ComponentHeroBanner";
import ComponentFooter from "../../components/organisms/componentFooter/ComponentFooter";
import NavPage from "../../components/molecules/nav/pageNav";
import Link from "next/link";

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

export default function Product({
  product,
  heroBanner,
  pageFooter,
  pageMenu,
  whatsappMe,
}) {
  const { title, price, description, imagesCollection } = product;
  const images = imagesCollection.items;
  console.log("whatsappMe", whatsappMe);
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
      <NavPage contentModule={pageMenu} />
      <ComponentHeroBanner contentModule={heroBanner} />
      <div className={`container`}>
        <div className={`row`}>
          <div className={`${classes.oImage} col-12 col-md-6`}>
            <Slider {...settings}>
              {images.map((item, index) => (
                <ComponentCarouselImage item={item} key={index} />
              ))}
            </Slider>
          </div>
          <div className={`${classes.oCopy} col-12 col-md-6`}>
            <div className={`${classes.oWrapper}`}>
              <h2 className={`${classes.aTitle}`}>{title}</h2>
              {description?.json ? (
                <div className={`${classes.mCopy}`}>
                  {documentToReactComponents(description?.json)}
                </div>
              ) : null}
              <p className={`${classes.aPrice} fnt18f`}>R{price}</p>
              <Link href={whatsappMe.url}>
                <a className={`${classes.oWhatsAppLink}`}>
                  <figure
                    className={`${classes.mWhatsAppLink}`}
                    style={{
                      backgroundImage: `url(${whatsappMe.image.url})`,
                    }}
                  ></figure>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ComponentFooter contentModule={pageFooter} />
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
  const heroBanner = data.componentHeroBanner;
  const pageFooter = data.componentFooter;
  const pageMenu = data.componentMenu;
  const whatsappMe = data.subcomponentLinkItem;

  return {
    props: {
      product: productData,
      heroBanner,
      pageFooter,
      pageMenu,
      whatsappMe,
    },
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
