import React from "react";
import { Link } from "react-router-dom";

const Error = () => {

    return (
        <section>
            <div className="error-main">
                <p> Oops! Page Not found. </p>
                <h1> 404 </h1>
                <Link to="/"> Go Back Home </Link>
            </div>
        </section>
    );
}

export default Error;