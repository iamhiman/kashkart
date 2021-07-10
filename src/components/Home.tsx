import React from 'react';
import { Link } from "react-router-dom";
import ShippingIcon from '@material-ui/icons/LocalShipping';
import SupportIcon from '@material-ui/icons/ContactSupport';
import ReturnIcon from '@material-ui/icons/MonetizationOn';
import CancelIcon from '@material-ui/icons/Cancel';

const Home: React.FunctionComponent = () => {

    const styles = {

        largeIcon: {
            width: 30,
            height: 30,
            marginRight: 3
        }

    };

    return (
        <section>
            <div className="landing-box">
                <div>
                    <h1>Everything you need. Delivered right to your door. We ship you happiness.</h1>
                    <p>We are India's fastest growing Ecommerce Store.</p>
                    <Link to="/products">Shop Now</Link>
                </div>

                <img src="bg.png" alt="landing-pic" />
            </div>

            <div className="features">
                <div className="features-card">
                    <p className="features-head"><ShippingIcon style={styles.largeIcon} /> Free Home Delivery</p>
                    <p className="features-para">No shipping Charges on Orders above &#8377; 500.</p>
                </div>

                <div className="features-card">
                    <p className="features-head"><CancelIcon style={styles.largeIcon} /> Easy Cancellation</p>
                    <p className="features-para">Cancel anytime as per your needs.</p>
                </div>

                <div className="features-card">
                    <p className="features-head"><ReturnIcon style={styles.largeIcon} /> Easy Return &amp; Refund</p>
                    <p className="features-para">We offer 30 days return and refund policy.</p>
                </div>

                <div className="features-card">
                    <p className="features-head"><SupportIcon style={styles.largeIcon} /> 24x7 Customer Care</p>
                    <p className="features-para">We provide 24*7 Customer Care support for feedbacks, suggestions and complaints.</p>
                </div>

            </div>
        </section>
    )
}

export default Home;
