import React from 'react';
import { Link } from "react-router-dom";
import CopyrightIcon from '@material-ui/icons/Copyright';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer: React.FunctionComponent = () => {

    const styles = {

        smallIcon: {
            width: 18,
            height: 18,
            marginRight: 10
        }
    };

    let year = new Date();

    return (
        <footer>
            <div className="footer-links">
                <Link to="/">Your Account</Link>
                <Link to="/">Your Orders</Link>
                <Link to="/">Wish List</Link>
                <Link to="/">Returns</Link>
                <Link to="/">Return Policy</Link>
                <Link to="/">Refund Policy</Link>
                <Link to="/">Cancellation Policy</Link>
                <Link to="/">Customer Service</Link>
            </div>

            <div className="copyright">
                <CopyrightIcon style={styles.smallIcon} />
                <p>{`${year.getFullYear()}, kashkart.in`}</p>
                <a href="https://github.com/iamhiman/kashkart" target="_blank" rel="noreferrer" ><GitHubIcon /></a>
            </div>
        </footer>
    )
}

export default Footer;