import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from "./ComponentProductCard.module.scss";

export default function ComponentProductCard(contentModule) {
  const { title, previewImage, description, price } =
    contentModule.contentModule;
  return (
    <section className={classes.oCard}>
      <div className={classes.oCard}>
        {previewImage?.fields?.file.url ? (
          <figure
            className={`${classes.mImage}`}
            style={{
              backgroundImage: `url(${previewImage.fields.file.url})`,
            }}
          ></figure>
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
