import React from 'react';

// styles
import styles from "./CoinList.module.css";

const CoinList = ({coinSymbol, coinName, coinImage, coinPrice, changeCoinPrice, marketCap}) => {
    return (
        
            <tr>
                <td><img className={styles.coinImg} src={coinImage} alt="coinImage" /></td>
                <td className={styles.coinName}>{coinName}</td>
                <td className={styles.coinSymbol}>{coinSymbol.toUpperCase()}</td>
                <td className={styles.marketCap}>${marketCap.toLocaleString()}</td>
                <td className={changeCoinPrice>0 ? styles.plusPrice :styles.negativePrice   }>{changeCoinPrice.toFixed(2)}</td>
                <td className={styles.coinPrice}>${coinPrice}</td>  
            </tr>
        
    );
};

export default CoinList;