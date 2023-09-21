import React from "react";
import ComponentHeroBanner from "../blocks/componentHeroBanner/ComponentHeroBanner";
import ComponentBodyCopy from "../organisms/componentBodyCopy/ComponentBodyCopy";

function DynamicBlocks(props) {
  const { contentModule } = props.props[0].fields.components;
  console.log("props", props);
  console.log("comps", props.props[0].fields.components);
  console.log("contentModule", contentModule);
  // switch (contentModule.page.fields.components) {
  //   case "blocks.hero":
  //     return <ComponentHeroBanner contentModule={contentModule} />;
  //   case "blocks.page-hero":
  //     return <ComponentBodyCopy contentModule={contentModule} />;

  //   default:
  //     return (
  //       <div>
  //         <h1>component not found</h1>
  //       </div>
  //     );
  // }
  return (
    <section>
      <h1>hello</h1>
      {/* contentModule={contentModule.props.props[0].fields.components} */}
    </section>
  );
}

export default DynamicBlocks;
