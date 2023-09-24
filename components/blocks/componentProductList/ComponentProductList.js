import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from "./ComponentProductList.module.scss";

function ComponentProductList({ contentModule }) {
  const { title, productList } = contentModule;
  return (
    <section className={`${classes.oProjectBlock}`}>
      <div className={`${classes.oContainer} container`}>
        <div className={`${classes.oRow} row`}>
          <h2 className={`${classes.aBlockTitle} fntH2 col`}>{title}</h2>
        </div>
        <div className={`${classes.oRow} row`}>
          {productList
            .filter((filteredProduct) => filteredProduct.fields.price)
            .map(
              (product, index) => (
                console.log("product", product),
                (
                  <Link href={`/products/${product.fields.slug}`} key={index}>
                    <article
                      className={`${classes.oProjectCard} col-12 col-md-3`}
                    >
                      <div className={classes.oCard}>
                        <figure
                          className={`${classes.mImage}`}
                          style={{
                            backgroundImage: `url(https:${product.fields.previewImage.fields.file.url})`,
                          }}
                        ></figure>
                        <div className={`${classes.mBody}`}>
                          <h5 className={`${classes.aTitle}`}>
                            {product.fields.title}
                          </h5>
                          {product.fields.description ? (
                            <div className={`${classes.aText}`}>
                              {documentToReactComponents(
                                product.fields.description
                              )}
                            </div>
                          ) : null}
                          <div className={`${classes.aPrice}`}>
                            <span>R</span>
                            {product.fields.price}
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                )
              )
            )}
          <div className={classes.mCtaBlock}>
            {/* <Link href={`/products/`}>
              <a className={`${classes.aBtn} aBtn`}>See the rest ...</a>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComponentProductList;
