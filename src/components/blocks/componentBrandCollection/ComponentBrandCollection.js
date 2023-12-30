// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Image from "next/image";
import Link from "next/link";
import ComponentProductCard from "../componentProductCard/ComponentProductCard";
import classes from "./ComponentBrandCollection.module.scss";
import ComponentVideoEmbed from "../../molecules/componentVideoEmbed/ComponentVideoEmbed";

export default function ComponentBrandCollection(contentModule) {
  const { title, brandLink, linkUrl } = contentModule.contentModule;
  const { image, imageSmall, videoEmbedLink, productLink } = brandLink.fields;
  const productInfo = productLink.fields;

  return (
    <section className={classes.oBrandCollection}>
      <h2 className={`${classes.aTitle} fntH2`}>{title}</h2>
      <div className={`${classes.oContainer} container`}>
        <div className={`${classes.oRow} row no-gutters`}>
          <div className={`${classes.oCol} col-12 col-md-6`}>
            <Image
              className={`${classes.aImage} a-responsive-image`}
              src={`https:${image?.fields?.file?.url}`}
              alt={image?.fields.title}
              width={image?.fields.file.details.image.width}
              height={image?.fields.file.details.image.height}
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
                      backgroundImage: `url(${imageSmall?.fields?.file?.url})`,
                    }}
                  ></figure>
                </div>

                <div className={`${classes.oColProductLink} col-12 col-md-6`}>
                  <Link
                    href={`/products/${linkUrl}`}
                    className={classes.oLinkItem}
                  >
                    <ComponentProductCard contentModule={productInfo} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
