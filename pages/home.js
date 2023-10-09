import { createClient } from "contentful";
import Nav from "../components/molecules/nav/Nav";
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

  const resMenu = await client.getEntries({
    content_type: "componentMenu",
    include: 10,
  });

  const resFooter = await client.getEntries({
    content_type: "componentFooter",
    include: 10,
  });

  return {
    props: {
      Page: resPage,
      pageMenu: resMenu.items[0].fields,
      PageFooter: resFooter.items[0].fields,
    },
    revalidate: 1,
  };
}

export default function Home({ Page, pageMenu, PageFooter }) {
  const componentHeroBanner = Page[0].fields.components[0].fields;
  const componentProductList = Page[0].fields.components[1].fields;
  return (
    <div className="anchor" id="top">
      <ComponentHeroBanner contentModule={componentHeroBanner} />
      <Nav contentModule={pageMenu} />
      <ComponentProductList contentModule={componentProductList} />
      <ComponentFooter contentModule={PageFooter} />
    </div>
  );
}
