import { createClient } from "contentful";
import ComponentHeroBanner from "../components/organisms/componentHeroBanner/ComponentHeroBanner";
import ComponentProductList from "../components/blocks/componentProductList/ComponentProductList";
const { C_SPACE_ID, C_DELIVERY_KEY } = require("../helpers/contentful-config");

export async function getStaticProps(context) {
  const client = createClient({
    space: C_SPACE_ID,
    accessToken: C_DELIVERY_KEY,
  });

  const resPage = await client
    .getEntries({
      content_type: "pageHome",
      include: 10,
    })

    .then((entries) => entries.items);

  return {
    props: {
      Page: resPage,
    },
    revalidate: 1,
  };
}

export default function Home({ Page }) {
  const componentHeroBanner = Page[0].fields.components[0].fields;
  const componentProductList = Page[0].fields.components[1].fields;
  return (
    <div className="anchor" id="top">
      <ComponentHeroBanner contentModule={componentHeroBanner} />
      <ComponentProductList contentModule={componentProductList} />
    </div>
  );
}
