import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {

    const [products, setProducts] = useState([]);

    const getData = () => {

        fetch('data.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setProducts(myJson)
            });
    }

    useEffect(() => {
        getData()
    }, [])

    const [cart, setCart] = useState([]);

    const addCart = (id) => {
        const check = cart.every(item => {
            return item.pid !== id;
        })

        if (check) {
            const data = products.filter(product => {
                return product.pid === id;
            })
            setCart([...cart, ...data]);
        }
        else {
            alert("Product has been added to cart.");
        }
    }

    useEffect(() => {

        const storageCart = JSON.parse(localStorage.getItem("storageCart"));

        if (storageCart) {
            setCart(storageCart);
        }
    }, [])

    useEffect(() => {

        localStorage.setItem("storageCart", JSON.stringify(cart));
    }, [cart])

    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}
