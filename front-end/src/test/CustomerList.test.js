import axios from "axios";
import { render, screen, waitFor } from "@testing-library/react";
import CustomerList from "../App";

jest.mock("axios");
let fakeCustomers = require("./db.json");

describe("CustomerList component renders", () => {
  test("it displays a number  for each customer ", async () => {
    axios.get.mockResolvedValue({ data: fakeCustomers });
    render(<CustomerList />);

    const customerList = await waitFor(() => screen.findAllByTestId("customer-list"));
    expect(customerList).toHaveLength(1);
  });
});