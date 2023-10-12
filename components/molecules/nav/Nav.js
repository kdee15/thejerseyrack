import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import Link from "next/dist/client/link";
import classes from "./Nav.module.scss";

export default function Nav(contentModule) {
  const [isActive, setIsActive] = useState();
  const [mobileView, setMobileView] = useState();
  const handleToggle = () => setIsActive(!isActive);

  useEffect(() => {
    setMobileView(isMobile);
  }, []);

  const { linkList } = contentModule.contentModule;

  return (
    <nav className={classes.oNavMain}>
      <span onClick={handleToggle} className={classes.burgerWrapper}>
        <BurgerMenu />
      </span>
      {mobileView ? (
        <div
          className={`${classes.mNavMobile} ${
            isActive ? `${classes.navOpen}` : `${classes.navClosed}`
          }`}
        >
          <div onClick={handleToggle} className={classes.mNavBurger}>
            <BurgerMenu handleToggle={handleToggle} isActive={isActive} />
          </div>
          <ul className={classes.mMenu}>
            {linkList.map((link, index) => (
              <li className={classes.navLink} key={index}>
                <Link onClick={handleToggle} href={link.fields.url}>
                  <a
                    className={classes.aLink}
                    target={`${link.fields.isExternal ? "_blank" : "_parent"}`}
                  >
                    {link.fields.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className={`${classes.mNavDesktop}`}>
          <ul className={classes.mMenu}>
            {linkList.map((link, index) => (
              <li className={classes.navLink} key={index}>
                <Link href={link.fields.url}>
                  <a
                    className={`${classes.aLink} fnt16b`}
                    target={`${link.fields.isExternal ? "_blank" : "_parent"}`}
                  >
                    {link.fields.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
