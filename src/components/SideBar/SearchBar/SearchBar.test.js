import React from "react";
import { render } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("SideBar tests", () => {
  it("should render", () => {
    expect(render(<SearchBar />)).toBeTruthy();
  });
});
