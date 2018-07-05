import React from "react";
import ReactDOM from "react-dom";
import Switch from "./switch";

/*

- What does my component render?

- Does my component render different things under different circumstances?

- When I pass a function as a prop, what does my component use it for?Does it call it, or just give it to another component? If it calls it, what does it call it with?

- When the user interacts with my component, what happens?

 */



test("hey", () => {
  //arrange
  const container = document.createElement("div");
  ReactDOM.render(<Switch />, container);

  //act

  //assert
});
