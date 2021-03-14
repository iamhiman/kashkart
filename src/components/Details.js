import React, { useContext } from 'react'
import { useParams, Link } from "react-router-dom"
import { DataContext } from "./DataProvider";

export default function Details() {

    const { id } = useParams();
    //console.log(useParams());
    //console.log(id);
    const value = useContext(DataContext);
    const [products] = value.products;

    const details = products.filter((product) => {
        return product.pid === id;
    })

    //console.log(details);

    return (
        <section>
            {
                details.map(product => (
                    <div className="details" key={product.pid}>
                        <div className="details-img" >
                        </div>

                        <div className="details-content">
                            <h2 title={product.title}>{product.title}</h2>
                            <div className="colors">
                                {
                                    product.colors.map((color, index) => (
                                        <button key={index} style={{ background: color }}></button>
                                    ))
                                }
                            </div>
                            <p>{product.description}</p>
                            <p>{product.content}</p>
                            <div className="thumb">
                                {
                                    product.images.map((img, index) => (
                                        <img src={img} alt="" key={index} />
                                    ))
                                }
                            </div>
                            <h3>&#8377; {product.price}</h3>
                            <Link to="/" className="details-addtocart">Add to Cart</Link>
                        </div>

                    </div>
                ))
            }
        </section>
    )
}
