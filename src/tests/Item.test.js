import React from "react";
import {render, screen } from "@testing-library/react";
import Item from "../components/Item";
import items from "../data";
import { act } from "react-dom/test-utils";

describe("Item component", () => {
    const fn = jest.fn();
    it("renders item correctly", async () => {
        let newItems = [...items];
        render(<Item item={newItems[0]} add={fn} delete={fn}/>)
        screen.getByText('Softee Baby', {exact: false});
    }) 

    it("calls add and remove functions", () => {
        let newItems = [...items];
        render(<Item item={newItems[0]} add={fn} delete={fn}/>)
        const plus = screen.getByRole("button", { "name": '+' });
        const minus = screen.getByRole("button", { "name": '-' });

        act(() => {
            plus.dispatchEvent(new MouseEvent("click", { bubbles: true }));
            minus.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        })

        expect(fn).toBeCalledTimes(2);
    })
})
