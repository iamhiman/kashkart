import React, { useState, useContext, useRef } from 'react';
import { useParams, Link } from "react-router-dom";
import { DataContext } from "../DataProvider";
import DetailsThumb from "./DetailsThumb";
import Colors from "./Colors";

export default function Details() {

    const { id } = useParams();
    const value = useContext(DataContext);
    const [products] = value.products;
    const addCart = value.addCart;
    const [index, setIndex] = useState(0);
    const imgDiv = useRef();

    const details = products.filter((product) => {
        return product.pid === id;
    })

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = (e.pageX - left) / width * 100;
        const y = (e.pageY - top) / height * 100;

        imgDiv.current.style.backgroundPosition = `${x}% ${y}%`;
    }

    return (
        <section>
            {
                details.map(product => (
                    <div className="details" key={product.pid}>
                        <div className="details-img" onMouseMove={handleMouseMove} style={{ backgroundImage: `url(${product.images[index]})` }} ref={imgDiv} onMouseLeave={() => imgDiv.current.style.backgroundPosition = `center`} />

                        <div className="details-content">
                            <h2 title={product.title}>{product.title}</h2>
                            <Colors colors={product.colors} />
                            <p>{product.description}</p>
                            <p>{product.content}</p>
                            <DetailsThumb images={product.images} setIndex={setIndex} />
                            <h3>&#8377; {product.price}</h3>
                            <Link to="/cart" className="details-addtocart" onClick={() => addCart(product.pid)}>Add to Cart</Link>
                        </div>

                    </div>
                ))
            }
        </section>
    )
}
