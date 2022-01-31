import React, { useContext } from 'react';

// component
import CoinList from './CoinList';

// context
import { CoinsContext } from '../context/GetApiContext';

// styles
import styles from "./Coins.module.css";


const Coins = () => {

    const coins = useContext(CoinsContext)
    console.log(coins)

    return (
        <div className={styles.container}>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Symble</th>
                        <th>Change Coin Price</th>
                        <th>Market Cap</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      coins.length ?
                      coins.map((coin) => <CoinList 
                      key={coin.id}
                      coinSymbol={coin.symbol}
                      coinName={coin.name}
                      coinImage={coin.image}
                      coinPrice={coin.current_price}
                      changeCoinPrice={coin.market_cap_change_percentage_24h}
                      marketCap={coin.market_cap}
                      />) :null
                    }
                   
                </tbody>
            </table>
        </div>
    );
};

export default Coins;