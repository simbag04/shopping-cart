import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Items from "./Items";
import Navbar from "./Navbar";
import uniqid from 'uniqid'
import Totals from "./Totals";
import ShoppingCart from "./ShoppingCart";

const Main = () => {
    const [items, setItems] = useState([
        {
            id: uniqid(),
            brand: "Bernat Softee Baby Yarn",
            color: "Lavender",
            quantity: 0,
            price: 4
        },
        {
            id: uniqid(),
            brand: "Bernat Softee Baby Yarn",
            color: "Navy",
            quantity: 0,
            price: 4
        },
        {
            id: uniqid(),
            brand: "Bernat Softee Baby Yarn",
            color: "Pale Blue",
            quantity: 0,
            price: 3
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
                        <Items items={items} add={addToCart} edit={editCart} delete={deleteFromCart}/>
                    } />
                    <Route path="/cart" element={<ShoppingCart items={items} />} />
                </Route>
            </Routes>
            <Totals totalItems={totalItems} totalPrice={totalPrice} />
        </BrowserRouter>
    );
};

export default Main;