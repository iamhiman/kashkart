import React from 'react'
import { Link } from "react-router-dom"

export default function Cart() {

    return (
        <section>
            <div className="cart">
                <div className="cart-box">

                    <div className="card">
                        <div className="card-img" />

                        <div className="card-content">
                            <p title="Title">Title</p>
                            <h3>&#8377; 1000</h3>

                            <div className="amount">
                                <button className="count"> - </button>
                                <span>1</span>
                                <button className="count"> + </button>
                            </div>

                            <button className="delete">Remove</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-img" />

                        <div className="card-content">
                            <p title="Title">Title</p>
                            <h3>&#8377; 1000</h3>

                            <div className="amount">
                                <button className="count"> - </button>
                                <span>1</span>
                                <button className="count"> + </button>
                            </div>

                            <button className="delete">Remove</button>
                        </div>
                    </div>

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
