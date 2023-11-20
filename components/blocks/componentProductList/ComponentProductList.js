import Link from "next/link";
import classes from "./ComponentProductList.module.scss";
import ComponentProductCard from "../componentProductCard/ComponentProductCard";

function ComponentProductList({ contentModule }) {
  const { title, productList, linkUrl } = contentModule;
  return (
    <section className={`${classes.oProjectBlock}`}>
      <div className={`${classes.oContainer} container`}>
        <div className={`${classes.oRow} row`}>
          <h2 className={`${classes.aBlockTitle} fntH2 col`}>{title}</h2>
        </div>
        <div className={`${classes.oRow} row`}>
          {productList
            .filter((filteredProduct) => filteredProduct.fields.price)
            .map((product, index) => (
              <Link href={`/products/${product.fields.slug}`} key={index}>
                <article className={`${classes.oProjectCard} col-12 col-md-3`}>
                  <ComponentProductCard contentModule={product.fields} />
                </article>
              </Link>
            ))}
          <div className={classes.mCtaBlock}>
            <Link href={linkUrl}>
              <a className={`${classes.aBtn} aBtn`}>See the rest ...</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComponentProductList;
