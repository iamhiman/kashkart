import React, { createContext, useState, useEffect } from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {

    const [products, setProducts] = useState([]);
    //console.log("Just before getData");
    const getData = () => {
        //console.log("Just before fetchapi");
        fetch('data.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                //console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                //console.log(myJson);
                setProducts(myJson)
                //console.log("Products1: ", products );
            });
        //console.log("Just after fetch api");
    }

    //console.log("Just before useeffect after getdata()");
    useEffect(() => {
        //console.log("Inside useffect");
        getData()
        //console.log("Products2: ", products );
        //console.log("After Calling getdata");
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
        console.log("cart:", cart);
    }

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
