import React from 'react';

// styles
import styles from "./Navbar.module.css";

// router
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className={styles.header}>
            <h3>coin</h3>
                <ul className={styles.list}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="coins">Coins</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;