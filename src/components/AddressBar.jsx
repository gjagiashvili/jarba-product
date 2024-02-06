import DeliveryIcon from '../assets/images/delivery-icon.svg'
import DiscountIcon from '../assets/images/discount-icon.svg'
import LocationIcon from '../assets/images/location-icon.svg'
import classes from '../modules/AddressBar.module.scss'

export const AddressBar = () => {
    return (
        <div className={classes['address-bar-wrapper']}>
            <div>
                <p>Welcome to worldwide The Jarba Emporium!</p>
            </div>
            <div className={classes['address-bar-actions']}>
                <figure className={classes['action']}>
                    <img src={DeliveryIcon} alt="delivery-icon"/>
                    <p>Deliver to 423651</p>
                </figure>
                <figure className={classes['action']}>
                    <img src={DiscountIcon} alt="discount-icon"/>
                    <p>Track your order</p>
                </figure>
                <figure className={classes['action']}>
                    <img src={LocationIcon} alt="location-icon"/>
                    <p>All Offers</p>
                </figure>
            </div>
        </div>
    )
}