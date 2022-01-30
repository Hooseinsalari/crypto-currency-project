import React from "react";

// style
import styles from "./HomePage.module.css";

// image
import coinBanner from "../image/coin2.jpg";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
          <h3>coin</h3>
        <ul className={styles.list}>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Coins</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </ul>
      </div>
      <div className={styles.headBanner}>
        <img src={coinBanner} className={styles.coinImg} />
        <p className={styles.information}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
          laboriosam earum in fuga saepe praesentium pariatur aliquid quis
          distinctio qui rerum temporibus voluptates, quod dolor maiores ad
          fugiat facere commodi.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
