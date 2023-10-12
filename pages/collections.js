import Link from "next/link";
import Image from "next/image";
import ComponentHeroBanner from "../components/organisms/componentHeroBanner/ComponentHeroBanner";
import ComponentFooter from "../components/organisms/componentFooter/ComponentFooter";
import classes from "../pages/products/Products.module.scss";
import NavPge from "../components/molecules/nav/pageNav";
import ComponentVideoEmbed from "../components/molecules/componentVideoEmbed/ComponentVideoEmbed";
import ComponentProductCard from "../components/blocks/componentProductCard/ComponentProductCard";
const { COLLECTION_LIST } = require("../helpers/data/CONTENT_COLLECTIONS");
const {
  C_GRAPHQL_URL,
  C_DELIVERY_KEY,
} = require("../helpers/contentful-config");

export async function getStaticProps() {
  const result = await fetch(C_GRAPHQL_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${C_DELIVERY_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: COLLECTION_LIST,
    }),
  });

  if (!result.ok) {
    return {};
  }

  const { data } = await result.json();
  const collections = data.pageBrandCollectionCollection.items;
  const heroBanner = data.componentHeroBanner;
  const pageMenu = data.componentMenu;
  const pageFooter = data.componentFooter;

  return {
    props: {
      collections,
      heroBanner,
      pageMenu,
      pageFooter,
    },
    revalidate: 1,
  };
}

export default function BrandCollections({
  collections,
  heroBanner,
  pageMenu,
  pageFooter,
}) {
  const navItems = pageMenu.linkListCollection.items;
  console.log("collections", collections);
  const { title, image, imageSmall, imageExtra, videoEmbedLink } =
    collections[0];
  return (
    <div className="anchor" id="top">
      <ComponentHeroBanner contentModule={heroBanner} />
      <NavPge contentModule={navItems} />

      <section className={classes.oBrandCollection}>
        <h2 className={`${classes.aTitle} fntH2`}>{title}</h2>
        <div className={`${classes.oContainer} container`}>
          <div className={`${classes.oRow} row no-gutters`}>
            <div className={`${classes.oCol} col-12 col-md-6`}>
              <Image
                className={`${classes.aImage} a-responsive-image`}
                src={image.url}
                alt={image?.title}
                width={image?.width}
                height={image?.height}
                aria-hidden="true"
                layout="responsive"
                priority="true"
              />
            </div>
            <div className={`${classes.oColRight} col-12 col-md-6`}>
              <div className={`${classes.oCol} ${classes.oColVideo} col-12`}>
                <ComponentVideoEmbed contentModule={videoEmbedLink} />
              </div>
              <div className={`${classes.oCol} col-12`}>
                <div className={`${classes.oRowScaled} row no-gutters`}>
                  <div className={`${classes.oColImageSmall} col-12 col-md-6`}>
                    <figure
                      className={`${classes.mImageSmall}`}
                      style={{
                        backgroundImage: `url(${imageSmall?.url})`,
                      }}
                    ></figure>
                  </div>
                  <div className={`${classes.oColImageSmall} col-12 col-md-6`}>
                    <figure
                      className={`${classes.mImageSmall}`}
                      style={{
                        backgroundImage: `url(${imageExtra?.url})`,
                      }}
                    ></figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className={`${classes.oBlockRow} row`}>
          {/* <ComponentBrandCollection contentModule={collections} /> */}
          {/* {products
            .filter((filteredProduct) => filteredProduct.category == "t_shirt")
            .map((product, index) => (
              <Link href={`/products/${product.slug}`} key={index}>
                <article className={`${classes.oProductCard} col-12 col-md-4`}>
                  <ComponentProductCard contentModule={product} />
                </article>
              </Link>
            ))} */}
        </div>
      </div>

      <ComponentFooter contentModule={pageFooter} />
    </div>
  );
}
