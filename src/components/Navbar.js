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
        <ul className={isShow ? styles.listT : styles.listF}>
          <li>
            <Link to="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="coins" className={styles.link}>
              Coins
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.link}>
              About
            </Link>
          </li>
        </ul>
        <img
          src={bars}
          alt="logo"
          className={styles.menuLogo}
          onClick={showHandler}
        />
      </div>
    </div>
  );
};

export default Navbar;
