import React, { useState } from 'react'
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Menu from "./svg/menu.svg";
import Close from "./svg/cross.png";

export default function Header() {

    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    }

    const styles = {

        largeIcon: {
          width: 28,
          height: 28,
        },

        styleMenu: {
            top: menu ? 0 : "-100%",
            backgroundColor: "#2b6777"
        }      
      };
      
    return (
        <header>
            <div className="logo">
                <h1><Link to="/">kashkart</Link></h1>
            </div>

            <form action="#" autoComplete="off">
                <input type="text" id="input-search" name="search" placeholder="Search..." />
            </form>

            <ul style={styles.styleMenu}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/">Login/Register</Link></li>
                <li onClick={toggleMenu}>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>
            </ul>

            <div className="cart-icon">
                <span>0</span>
                <Link to="/cart">
                    <ShoppingCartIcon style={styles.largeIcon} className="menu"></ShoppingCartIcon>
                </Link>
            </div>

            <div className="menu" onClick={toggleMenu}>
                <img src={Menu} alt="" width="30" />
            </div>

        </header>
    )
}
