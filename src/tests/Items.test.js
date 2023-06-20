import React from "react";
import {render, screen } from "@testing-library/react";
import items from "../data";
import Items from "../components/Items";
import { BrowserRouter } from "react-router-dom";

jest.mock('../components/Item', () => () => {
    return <mock-item data-testid="item" />
});

describe("Items component", () => {
    it("renders correct number of children", () => {
        render(
            <BrowserRouter>
                <Items items={items} />
            </BrowserRouter>
        );
        
        screen.getByText("Items");
        expect(screen.getAllByTestId("item").length).toBe(items.length);
    })
})