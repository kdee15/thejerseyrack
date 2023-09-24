import Link from "next/link";
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
            .filter((filteredProduct) => filteredProduct.fields.price === 150)
            .map((product, index) => (
              <Link href={`/products/${product.fields.slug}`} key={index}>
                <article className={`${classes.oProjectCard} col-12 col-md-3`}>
                  <div className={classes.oCard}>
                    <figure
                      className={`${classes.mImage}`}
                      style={{
                        backgroundImage: `url(https:${product.fields.previewImage.fields.file.url})`,
                      }}
                    ></figure>
                    <div className={`${classes.mBody}`}>
                      {product.fields.title}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
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
