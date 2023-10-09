import Image from "next/dist/client/image";
import classes from "./ComponentFooter.module.scss";

export default function ComponentFooter(contentModule) {
  const { title, logo } = contentModule.contentModule;
  return (
    <section className={classes.oFooter}>
      <h3 className={`${classes.aTitle} fntH3`}>{title}</h3>
    </section>
  );
}
