import React from "react";
import { isMobile } from "react-device-detect";
import classes from "./ComponentHeroBanner.module.scss";
import Image from "next/image";
import { useState, useEffect } from "react";

function ComponentHeroBanner({ contentModule }) {
  const [mobileView, setMobileView] = useState();
  const {
    title,
    subtitle,
    backgroundImage,
    backgroundImageMobile,
    logo,
    homepageBanner,
  } = contentModule;

  useEffect(() => {
    setMobileView(isMobile);
  }, []);

  return (
    <section
      className={`${classes.oHeroBlock} ${
        homepageBanner ? classes.bannerHome : classes.bannerPage
      }`}
    >
      <div className={`${classes.oContentBlock}`}>
        {homepageBanner ? (
          <figure className={classes.mLogo}>
            {logo && (
              <Image
                className={`${classes.aImage} a-responsive-image`}
                src={logo?.fields?.file?.url}
                alt={logo?.fields.title}
                width={logo?.fields.file.details.image.width}
                height={logo?.fields.file.details.image.height}
                aria-hidden="true"
                layout="responsive"
                priority="true"
              />
            )}
          </figure>
        ) : null}
        {title ? <h1>{title}</h1> : null}
        {subtitle ? <h4>{subtitle}</h4> : null}
      </div>

      {mobileView ? (
        <>
          {homepageBanner ? (
            <figure
              className={`${classes.introImage}`}
              style={{
                backgroundImage: `url(http:${backgroundImageMobile?.fields?.file.url})`,
              }}
            ></figure>
          ) : (
            <figure
              className={`${classes.introImage}`}
              style={{
                backgroundImage: `url(${backgroundImageMobile?.url})`,
              }}
            ></figure>
          )}
        </>
      ) : (
        <>
          {homepageBanner ? (
            <figure
              className={`${classes.introImage}`}
              style={{
                backgroundImage: `url(http:${backgroundImage?.fields.file.url})`,
              }}
            ></figure>
          ) : (
            <figure
              className={`${classes.introImage}`}
              style={{
                backgroundImage: `url(${backgroundImage?.url})`,
              }}
            ></figure>
          )}
        </>
      )}
    </section>
  );
}

export default ComponentHeroBanner;
