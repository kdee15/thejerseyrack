import Image from "next/image";
import Link from "next/link";
import classes from "./ComponentFooter.module.scss";

export default function ComponentFooter(contentModule) {
  const { title, logo, image, socialMedia } = contentModule.contentModule;
  const smMenu = socialMedia?.linkListCollection?.items;
  return (
    <section className={classes.oFooter}>
      <div className={`${classes.oContainer} container`}>
        <div className={`${classes.oRow} row`}>
          <div className={`${classes.oCol} col-12 col-md-4`}>
            <figure className={`${classes.mLogo}`}>
              {logo.fields ? (
                <Image
                  className={`${classes.aImage}`}
                  src={`https:${logo.fields.file.url}`}
                  height={logo.fields.file.details.image.height}
                  width={logo.fields.file.details.image.width}
                  alt={logo.title}
                  aria-hidden="true"
                  layout="responsive"
                  priority="true"
                />
              ) : (
                <figure
                  className={`${classes.aImageBG}`}
                  style={{
                    backgroundImage: `url(${logo.url})`,
                  }}
                ></figure>
              )}
            </figure>
          </div>
          <div
            className={`${classes.oCol} ${classes.oMenuCol} col-12 col-md-4`}
          >
            <ul className={`${classes.oNavigation} ${classes.footerMenu}`}>
              {smMenu ? (
                <>
                  {smMenu.map((item, index) => (
                    <li key={index} className={`${classes.mMenuItem}`}>
                      <Link
                        href={item.url}
                        target={`${item.isExternal ? "_blank" : "_parent"}`}
                        className={classes.oLinkItem}
                      >
                        <figure
                          className={`${classes.mImage}`}
                          style={{
                            backgroundImage: `url(${item.image.url})`,
                          }}
                        ></figure>
                      </Link>
                    </li>
                  ))}
                </>
              ) : (
                <>
                  {socialMedia.fields.linkList.map((item, index) => (
                    <li key={index} className={`${classes.mMenuItem}`}>
                      <Link
                        href={item.fields.url}
                        className={classes.oLinkItem}
                        target={`${
                          item.fields.isExternal ? "_blank" : "_parent"
                        }`}
                      >
                        <Image
                          className={`${classes.aImage}`}
                          src={`https:${item.fields.image.fields.file.url}`}
                          height={
                            item.fields.image.fields.file.details.image.height
                          }
                          width={
                            item.fields.image.fields.file.details.image.width
                          }
                          alt={item.title}
                          aria-hidden="true"
                          layout="responsive"
                          priority="true"
                        />
                      </Link>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
          <div className={`${classes.oCol} col-12 col-md-4`}>
            {" "}
            <figure className={`${classes.mContact}`}>
              {image.fields ? (
                <Image
                  className={`${classes.aImage}`}
                  src={`https:${image.fields.file.url}`}
                  height={image.fields.file.details.image.height}
                  width={image.fields.file.details.image.width}
                  alt={image.title}
                  aria-hidden="true"
                  layout="responsive"
                  priority="true"
                />
              ) : (
                <figure
                  className={`${classes.aImageBG}`}
                  style={{
                    backgroundImage: `url(${image.url})`,
                  }}
                ></figure>
              )}
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
