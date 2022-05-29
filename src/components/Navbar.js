import React, { useState } from "react";

// styles
import styles from "./Navbar.module.css";

// router
import { Link } from "react-router-dom";

// img
import logo from "../image/logo.png";

// icon
import bars from "../svg/bars.svg";

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);

  const showHandler = () => {
    setIsShow((prevState) => !prevState);
  };

  return (
    <div className={styles.header}>
      <img src={logo} alt="logo" className={styles.logo} />

      <div className={styles.menu}>
        <ul className={`${!isShow ? styles.menu__listClose :styles.menu__list}`}>
          <li className={styles.menu__item}>
            <Link to="/" className={styles.menu__link}>
              Home
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link to="coins" className={styles.menu__link}>
              Coins
            </Link>
          </li>
          <li className={styles.menu__item}>
            <Link to="/" className={styles.menu__link}>
              About
            </Link>
          </li>
        </ul>
      </div>

      <img
        src={bars}
        alt="logo"
        className={styles.menuLogo}
        onClick={showHandler}
      />

    </div>
  );
};

export default Navbar;
