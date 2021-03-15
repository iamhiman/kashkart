import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { DataContext } from "./DataProvider";

export default function Cart() {

    const value = useContext(DataContext);
    const [cart, setCart] = value.cart;

    return (
        <section>
            <div className="cart">
                <div className="cart-box">
                    {
                        cart.map(product => (
                            <div className="card" key={product.pid}>
                                <div className="card-img" style={{ backgroundImage: `url(${product.images[0]})` }} />

                                <div className="card-content">
                                    <p title={product.title}>{product.title}</p>
                                    <h3>&#8377; {product.price}</h3>

                                    <div className="amount">
                                        <button className="count"> - </button>
                                        <span>{product.count}</span>
                                        <button className="count"> + </button>
                                    </div>

                                    <button className="delete">Remove</button>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="checkout">
                    <p className="heading">Price Details</p>

                    <div className="price">
                        <p>Price: </p><p>&#8377; 1000</p>
                    </div>

                    <div className="delivery">
                        <p>Delivery Charges: </p> <p>&#8377; 100</p>
                    </div>

                    <div className="total">
                        <p>Total: </p><p>&#8377; 1000</p>
                    </div>

                    <Link to="/" className="checkout-btn">Payment</Link>
                </div>

            </div>

        </section>
    )
}
