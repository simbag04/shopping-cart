import React from "react";
import {render, screen } from "@testing-library/react";
import items from "../data";
import ShoppingCart from "../components/ShoppingCart";
import { BrowserRouter } from "react-router-dom";

describe("Shopping Cart component", () => {
    it("doesn't render items with quantity greater than 0", () => {
        render(
            <BrowserRouter>
                <ShoppingCart items={items} />
            </BrowserRouter>
        );
        
        expect(screen.queryByText("Lavender")).toBeNull();
        expect(screen.queryByText("Pale Blue")).toBeNull();
        expect(screen.queryByText("Navy")).toBeNull();
    })

    it("renders items with quantity greater than 0", () => {
        let newItems = [...items];
        newItems[0].quantity = 5;
        render(
            <BrowserRouter>
                <ShoppingCart items={newItems} />
            </BrowserRouter>
        );
        
        screen.getByText("Lavender")
        expect(screen.queryByText("Pale Blue")).toBeNull();
        expect(screen.queryByText("Navy")).toBeNull();
    })
})