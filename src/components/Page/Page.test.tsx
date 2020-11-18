import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";

import { LoggedIn } from "./Page.stories";

it("logined page show logout button", () => {
  const div = document.createElement("div");
  // Our story will be used for the test.
  // With the arguments that were created.
  ReactDOM.render(<LoggedIn {...LoggedIn.args} />, div);

  const button = div.querySelector(".storybook-button");
  expect(button?.innerHTML).toEqual("Log out");
  expect(button?.textContent).toEqual("Log out");

  ReactDOM.unmountComponentAtNode(div);
});
