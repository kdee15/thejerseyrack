import React from "react";
import classes from "./ComponentCarouselImage.module.scss";

function ComponentCarouselImage({ item }) {
  return (
    <figure
      className={classes.aCarouselImage}
      style={{
        backgroundImage: `url(${item.url})`,
      }}
    ></figure>
  );
}

export default ComponentCarouselImage;
