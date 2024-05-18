import { fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";
import TestAxios from "./TestAxios";
import axiosMock from "axios"

jest.mock("axios")

it("should display the loading text", () => {
    const {getByTestId} = render(<TestAxios />);
    expect(getByTestId('loading')).toHaveTextContent('Loading...');
})

it("should load and display the data", async () => {
    const url = "/hello";
    const {getByTestId} = render(<TestAxios url={url}/>);
    axiosMock.get.mockResolvedValueOnce({
        data: {login: "siva010928", name: "siva"}
    })
    fireEvent.click(getByTestId("fetch-data"));
    const helloData = await waitFor(() => getByTestId('show-data'));
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
    expect(helloData).toHaveTextContent("siva010928");
    
})