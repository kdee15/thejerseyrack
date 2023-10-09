import { createClient } from "contentful";
import ComponentHeroBanner from "../components/organisms/componentHeroBanner/ComponentHeroBanner";
import ComponentProductList from "../components/blocks/componentProductList/ComponentProductList";
import ComponentFooter from "../components/organisms/componentFooter/ComponentFooter";
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
  const resFooter = await client.getEntries({
    content_type: "componentFooter",
    include: 10,
  });

  return {
    props: {
      Page: resPage,
      PageFooter: resFooter.items[0].fields,
    },
    revalidate: 1,
  };
}

export default function Home({ Page, PageFooter }) {
  const componentHeroBanner = Page[0].fields.components[0].fields;
  const componentProductList = Page[0].fields.components[1].fields;
  return (
    <div className="anchor" id="top">
      <ComponentHeroBanner contentModule={componentHeroBanner} />
      <ComponentProductList contentModule={componentProductList} />
      <ComponentFooter contentModule={PageFooter} />
    </div>
  );
}
