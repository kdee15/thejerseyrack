import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import classes from "./ComponentProductCard.module.scss";

export default function ComponentProductCard(contentModule) {
  const { title, previewImage, description, price, customClass } =
    contentModule.contentModule;

  return (
    <section className={`${classes.oCard} ${classes[customClass]}`}>
      <div className={classes.oCard}>
        {previewImage.fields ? (
          <figure className={`${classes.mImage}`}>
            <Image
              className={`${classes.aImage}`}
              src={`https:${previewImage.fields.file.url}`}
              height={previewImage.fields.file.details.image.height}
              width={previewImage.fields.file.details.image.width}
              alt={previewImage.title}
              layout="responsive"
              priority="true"
            />
          </figure>
        ) : (
          <figure
            className={`${classes.mImage}`}
            style={{
              backgroundImage: `url(${previewImage.url})`,
            }}
          ></figure>
        )}
        <div className={`${classes.mBody}`}>
          <h5 className={`${classes.aTitle}`}>{title}</h5>
          {description?.json ? (
            <div className={`${classes.mCopy}`}>
              {documentToReactComponents(description?.json)}
            </div>
          ) : null}
          <div className={`${classes.aPrice}`}>
            <span>R</span>
            {price}
          </div>
        </div>
      </div>
    </section>
  );
}
