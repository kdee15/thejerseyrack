import Link from "next/link";
import ComponentHeroBanner from "../components/organisms/componentHeroBanner/ComponentHeroBanner";
import ComponentFooter from "../components/organisms/componentFooter/ComponentFooter";
import classes from "../pages/products/Products.module.scss";
import ComponentProductCard from "../components/blocks/componentProductCard/ComponentProductCard";
import Nav from "../components/molecules/nav/pageNav";
const { PRODUCT_LIST } = require("../helpers/data/CONTENT_PRODUCTS");
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
      query: PRODUCT_LIST,
    }),
  });

  if (!result.ok) {
    return {};
  }

  const { data } = await result.json();
  const products = data.pageProductCollection.items;
  const heroBanner = data.componentHeroBanner;
  const pageMenu = data.componentMenu;
  const pageFooter = data.componentFooter;

  return {
    props: {
      products,
      heroBanner,
      pageMenu,
      pageFooter,
    },
    revalidate: 1,
  };
}

export default function Home({ products, heroBanner, pageMenu, pageFooter }) {
  const navItems = pageMenu.linkListCollection.items;
  return (
    <div className="anchor" id="top">
      <ComponentHeroBanner contentModule={heroBanner} />
      <Nav contentModule={navItems} />
      <div className="container">
        <div className={`${classes.oBlockRow} row`}>
          {products.map((product, index) => (
            <Link href={`/products/${product.slug}`} key={index}>
              <article className={`${classes.oProductCard} col-12 col-md-4`}>
                <ComponentProductCard contentModule={product} />
              </article>
            </Link>
          ))}
        </div>
      </div>
      <ComponentFooter contentModule={pageFooter} />
    </div>
  );
}
