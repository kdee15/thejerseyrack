import React from "react";
import classes from "./ComponentVideoEmbed.module.scss";

function ComponentVideoEmbed({ contentModule }) {
  return (
    <div className={classes.mVideo}>
      <iframe
        className={classes.aVideo}
        width="560"
        height="315"
        src={contentModule}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default ComponentVideoEmbed;
