import React, { useContext } from "react";

// context
import { CoinsContext } from "../context/GetApiContext";

// style
import styles from "./HomePage.module.css";

// router
import { Link } from "react-router-dom";

const HomePage = () => {
  const data = useContext(CoinsContext);

  const coins = data.filter((coin) => coin.market_cap_rank <= 3);

  return (
    <div className={styles.container}>
      <div className={styles.headBanner}></div>
      <div className={styles.mainCoins}>
        {coins.length ? (
          coins.map((coin) => (
            <div className={styles.topCoinsContainer} key={coin.id}>
              <img src={coin.image} className={styles.coinImg} alt="logo" />
              <div className={styles.firstDetail}>
                <p>{coin.name}</p>
                <p>${coin.current_price}</p>
              </div>
              <p
                className={
                  coin.market_cap_change_percentage_24h > 0
                    ? styles.plusPrice
                    : styles.negativePrice
                }
              >
                {coin.market_cap_change_percentage_24h.toFixed(2)}
              </p>
              <p className={styles.marketCap}>
                {coin.market_cap.toLocaleString()}
              </p>
            </div>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
      <div className={styles.moreCoins}>
        <Link to="/coins">More Coins</Link>
      </div>
    </div>
  );
};

export default HomePage;
