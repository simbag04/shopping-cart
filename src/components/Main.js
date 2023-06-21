import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Items from "./Items";
import Navbar from "./Navbar";
import uniqid from 'uniqid'
import ShoppingCart from "./ShoppingCart";
import './styles.css'
import Lavender from '../images/Lavender.jpg';
import Navy from '../images/Navy.jpg';
import PaleBlue from '../images/PaleBlue.jpg';
import Bubblegum from '../images/Bubblegum.jpg';

const Main = () => {
    const [items, setItems] = useState([
        {
            id: uniqid(),
            brand: "Bernat Softee Baby Yarn",
            color: "Lavender",
            src: Lavender,
            quantity: 0,
            price: 4
        },
        {
            id: uniqid(),
            brand: "Bernat Softee Baby Yarn",
            color: "Navy",
            src: Navy,
            quantity: 0,
            price: 4
        },
        {
            id: uniqid(),
            brand: "Bernat Softee Baby Yarn",
            color: "Pale Blue",
            src: PaleBlue,
            quantity: 0,
            price: 3
        },
        {
            id: uniqid(),
            brand: "Bernat Softee Baby Yarn",
            color: "Bubblegum",
            src: Bubblegum,
            quantity: 0,
            price: 4
        }
    ])

    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const editCart = (id, quantity) => {
        // get relevant item
        let item = items.filter((item) => item.id === id);

        // set item quantity
        if (item[0].quantity + quantity < 0) return null;

        item[0].quantity = item[0].quantity + quantity;

        setTotalItems(totalItems + quantity);
        setTotalPrice(totalPrice + (quantity * item[0].price));
        
        let newItems = items.map((i) => i.id === id ? item[0] : i);
        setItems(newItems);
    }

    const addToCart = (id) => editCart(id, 1);
    const deleteFromCart = (id) => editCart(id, -1);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Home />} />
                    <Route path="/items" element={
                        <div className="page">
                            <Items items={items} add={addToCart} edit={editCart} delete={deleteFromCart}/>
                        </div>
                    } />
                    <Route path="/cart" element={
                        <div className="page">
                            <ShoppingCart items={items} totalItems={totalItems} totalPrice={totalPrice} />
                        </div>
                    } />
                </Route>
            </Routes>
            
        </BrowserRouter>
    );
};

export default Main;