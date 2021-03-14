import React, { useContext } from 'react';
import { DataContext } from "./DataProvider";
//import { Link } from "react-router-dom";

export default function Products() {

    const [products] = useContext(DataContext);
    console.log("Inside products component", products);
    return (
        <section>
            <div className="products">


                {/*<div className="products-card">
                    <Link to='/'>
                        <img src="" alt="" />
                    </Link>
                    <div className="products-content">
                        <h3 title="Tshirt">
                            <Link to='/'>T-Shirt</Link>
                        </h3>
                        <p className="products-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <p className="products-price">&#8377; 1234</p>
                        <button>Add to Cart</button>
                    </div>
                </div>*/}

            </div>
        </section>
    )
}
