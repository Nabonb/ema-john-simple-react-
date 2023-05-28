// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';


const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(products)

    const [cart, setCart] = useState([]);
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        //step 1: Get Id
        for (const id in storedCart) {
            // console.log(id)
        //step 2: Get The Product By Using Id
            const addedProduct = products.find(product => product.id === id)//those product was find which id is matched with the local storage stored id and then the full product stored in the addedProduct. And Find shudu matro akhta product dibe mile gele ar khujbe na.
            // console.log(addedProduct);
        //step 3: Set Quantity
            if (addedProduct) {//jodi addedproduct a product add hoi tahole dhukbe tai ai shorto disa cz first a kichu pabe na error dibe tai ai shorto.
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
        //step 4: Add The Added Product To The Saved Cart
                savedCart.push(addedProduct);
            }
        }
        //step 5: Set the cart
        setCart(savedCart);
    }, [products])
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;