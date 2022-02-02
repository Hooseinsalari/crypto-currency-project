import React, { useContext, useState } from "react";

// component
import CoinList from "./CoinList";

// context
import { CoinsContext } from "../context/GetApiContext";

// styles
import styles from "./Coins.module.css";
import Loading from "./Loading";

const Coins = () => {
  const [inputValue, setInputValue] = useState("");

  const coins = useContext(CoinsContext);

  const inputHandler = (event) => {
    setInputValue(event.target.value);
  };

  const searchCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className={styles.container}>
      {coins.length ? (
        <>
          <div>
            <input
              type="text"
              className={styles.input}
              onChange={inputHandler}
              value={inputValue}
              placeholder="Search Coin..."
            />
          </div>
          <div className={styles.tableWrapper}>
            <table className={styles.flTable}>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Symble</th>
                  <th>Change Price</th>
                  <th>Market Cap</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {coins.length
                  ? searchCoins.map((coin) => (
                      <CoinList
                        key={coin.id}
                        coinSymbol={coin.symbol}
                        coinName={coin.name}
                        coinImage={coin.image}
                        coinPrice={coin.current_price}
                        changeCoinPrice={coin.market_cap_change_percentage_24h}
                        marketCap={coin.market_cap}
                      />
                    ))
                  : null}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Coins;
