import { fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";
import AsyncCounter from "./AsyncCounter";

describe("Testing asynchronous counter functionality", () => {
    it("increments the counter value 0.5 seconds later after the increment button clicked", async () => {
        const {getByTestId, getByText} = render(<AsyncCounter />);    
        fireEvent.click(getByTestId('up-button'));
        const counter = await waitFor(() => getByText('1'));
        expect(counter).toHaveTextContent('1');
        
    })
})