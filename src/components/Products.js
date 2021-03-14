import React, { useContext } from 'react';
import { DataContext } from "./DataProvider";
import { Link } from "react-router-dom";

export default function Products() {

    const value = useContext(DataContext);
    const [products] = value.products;
    //console.log(value);
    //console.log("Inside products component", products);

    return (
        <section>
            <div className="products">
                {
                    products.map(product => (
                        <div className="products-card" key={product.pid}>
                            <Link to='/'>
                                <img src={product.images[0]} alt="cover-pic" />
                            </Link>
                            <div className="products-content">
                                <h3 title={product.title}>
                                    <Link to='/'>{product.title}</Link>
                                </h3>
                                <p className="products-desc">{product.description}</p>
                                <p className="products-price">&#8377; {product.price}</p>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
