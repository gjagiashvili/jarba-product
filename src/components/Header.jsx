import classes from "../modules/Header.module.scss";
import Logo from "../assets/images/logo.jpeg";
import {Link} from "react-router-dom";
import Location from "../assets/images/location-icon.svg";
import Store from "../assets/images/store-icon.png";
import Cart from "../assets/images/cart-icon.jpeg";

export const Header = () => {
    return (
        <div className={classes['header-wrapper']}>
            <Link to={'/'}>
                <figure>
                    <img src={Logo} alt=""/>
                        <p>Jarba Emporium</p>
                </figure>
            </Link>
            <nav>
                <ul>
                    <li>
                        <img src={Location} alt="location-icon"/>
                        <Link to={'/contact-us'}>Contact Us</Link>
                    </li>
                    <li>
                        <img src={Store} alt="store-icon"/>
                        <Link to={'/products'}>All Products</Link>
                    </li>
                    <li>
                        <img src={Cart} alt="cart-icon"/>
                        <Link to={'/cart'}>Cart</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}