import React from "react";
// import Switch from "./switch";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// import { shallow } from "enzyme";
configure({ adapter: new Adapter() });

/*

Questions when designing a component:

- What does my component render?

- Does my component render different things under different circumstances?

- When I pass a function as a prop, what does my component use it for? Does it call it, or just give it to another component? If it calls it, what does it call it with?

- When the user interacts with my component, what happens?



====================================================================

When deciding whether writing a test or not:

1) Will the test have to duplicate exactly the application code?

2) Will making assertions in the test duplicate any behavior that is already covered by (and the responsibility of) library code?

3) From an outsider’s perspective, is this detail important, or is it only an internal concern? Can the effect of this internal detail be described using only the component’s public API?

 */



// What does it render?

test("should aways render these things", () => {


});


// What does it do with the props?
// Does it render different things depending on the value of the ON prop?

test("should render this if XXX prop is YYY", () => {


});

test("", () => {


});


// What else does it do with the props? Does it pass them to any elements?

test("should pass prop values as attributes", () => {


});

test("", () => {


});


