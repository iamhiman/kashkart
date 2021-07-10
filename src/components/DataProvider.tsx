import React, { createContext, useState, useEffect } from 'react';

interface IProductType {
    colors: Array<string>;
    content: string;
    count: number;
    description: string;
    images: Array<string>;
    pid: string;
    price: number;
    title: string;
};

interface IContextProps {
    products: IProductType[];
    setProducts: (arg0: Array<IProductType>) => void;
    cart: IProductType[];
    setCart: (arg0: Array<IProductType>) => void;
    addCart: (arg0: string) => void;
}

export const DataContext = createContext<IContextProps>({} as IContextProps);

export const DataProvider: React.FunctionComponent = (props) => {

    const [products, setProducts] = useState<IProductType[]>([]);
    const [cart, setCart] = useState<IProductType[]>([]);

    useEffect(() => {
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
    }, [])

    const addCart = (id: string) => {
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

        const storageCart: Array<IProductType> = JSON.parse(localStorage.getItem("storageCart") || '{}');

        if (storageCart) {
            setCart(storageCart);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("storageCart", JSON.stringify(cart));
    }, [cart])

    const value: IContextProps = {
        products: products,
        setProducts: setProducts,
        cart: cart,
        setCart: setCart,
        addCart: addCart,
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}
