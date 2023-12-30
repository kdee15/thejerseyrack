import React from "react";
import { isMobile } from "react-device-detect";
import classes from "./ComponentHeroBanner.module.scss";
import Image from "next/image";
import Link from "next/link";
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
    <>
      {homepageBanner ? (
        <section className={`${classes.oHeroBlock} ${classes.bannerHome}`}>
          <div className={`${classes.oContentBlock}`}>
            <figure className={classes.mLogo}>
              {logo && (
                <Image
                  className={`${classes.aImage} a-responsive-image`}
                  src={`https:${logo?.fields?.file?.url}`}
                  alt={logo?.fields.title}
                  width={logo?.fields.file.details.image.width}
                  height={logo?.fields.file.details.image.height}
                  aria-hidden="true"
                  priority="true"
                />
              )}
            </figure>
            <div className={classes.mCopy}>
              {title ? <h1>{title}</h1> : null}
              {subtitle ? <h4>{subtitle}</h4> : null}
            </div>
          </div>
          {mobileView ? (
            <figure
              className={`${classes.mBackgroundImage}`}
              style={{
                backgroundImage: `url(https:${backgroundImageMobile?.fields?.file.url})`,
              }}
            ></figure>
          ) : (
            <figure
              className={`${classes.mBackgroundImage}`}
              style={{
                backgroundImage: `url(https:${backgroundImage?.fields.file.url})`,
              }}
            ></figure>
          )}
        </section>
      ) : (
        <section className={`${classes.oHeroBlock} ${classes.bannerPage}`}>
          <div className={`container`}>
            <div className={`row`}>
              {logo && (
                <Link href={`/`}>
                  <figure
                    className={classes.mLogo}
                    style={{
                      backgroundImage: `url(https:${logo?.url})`,
                    }}
                  ></figure>
                </Link>
              )}
              <div className={`${classes.oContentBlock}`}>
                {title ? <h1>{title}</h1> : null}
                {subtitle ? <h4>{subtitle}</h4> : null}
              </div>
            </div>
          </div>

          {mobileView ? (
            <figure
              className={`${classes.mBackgroundImage}`}
              style={{
                backgroundImage: `url(${backgroundImageMobile?.url})`,
              }}
            ></figure>
          ) : (
            <figure
              className={`${classes.mBackgroundImage}`}
              style={{
                backgroundImage: `url(${backgroundImage?.url})`,
              }}
            ></figure>
          )}
        </section>
      )}
    </>
  );
}

export default ComponentHeroBanner;
