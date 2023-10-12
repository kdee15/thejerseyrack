import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import BurgerMenu from "../burgerMenu/BurgerMenu";
import Link from "next/dist/client/link";
import classes from "./Nav.module.scss";

export default function NavPage(contentModule) {
  const [isActive, setIsActive] = useState();
  const [mobileView, setMobileView] = useState();
  const handleToggle = () => setIsActive(!isActive);

  useEffect(() => {
    setMobileView(isMobile);
  }, []);

  const linkList = contentModule.contentModule;

  return (
    <nav className={classes.oNavMain}>
      <span onClick={handleToggle} className={classes.burgerWrapper}>
        <BurgerMenu />
      </span>
      {mobileView ? (
        <div
          className={`${classes.mNavMobile} mNavMobile ${
            isActive
              ? `${classes.navOpen} navOpen`
              : `${classes.navClosed} navClose`
          }`}
        >
          <div onClick={handleToggle} className={classes.mNavBurger}>
            <BurgerMenu handleToggle={handleToggle} isActive={isActive} />
          </div>
          <ul className={classes.mMenu}>
            {linkList.map((link, index) => (
              <li className={classes.navLink} key={index}>
                <Link onClick={handleToggle} href={link.url}>
                  <a
                    className={classes.aLink}
                    target={`${link.isExternal ? "_blank" : "_parent"}`}
                  >
                    {link.label}
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
                <Link href={link.url}>
                  <a
                    className={`${classes.aLink} fnt16b`}
                    target={`${link.isExternal ? "_blank" : "_parent"}`}
                  >
                    {link.title}
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
