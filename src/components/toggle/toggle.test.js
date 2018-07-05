import React from "react";
import Toggle from "./toggle";
import Switch from "../switch/switch";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { shallow, mount } from "enzyme";
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

describe("Toggle", () => {
  it("always renders a Switch", () => {
    // arrange
    const toggle = shallow(<Toggle />);

    // assert
    expect(toggle.find(Switch).length).toBe(1);
  });

  it("Switch receives props", () => {
    // arrange
    const toggle = shallow(<Toggle />);
    const switchComponent = toggle.find(Switch);

    // assert
    expect(switchComponent.props().on).toBeDefined();
    expect(switchComponent.props().onClick).toBeDefined();
  });

  it("Calls onToggle when clicked", () => {
    // arrange
    const spy = jest.fn();
    const toggle = shallow(<Toggle onToggle={spy} />);
    const switchComponent = toggle.find(Switch);

    // act
    switchComponent.simulate("click");

    // assert
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("Calls onToggle when clicked", () => {
    // arrange
    const onToggle = jest.fn();
    const toggle = mount(<Toggle onToggle={onToggle} />);
    const switchComponent = toggle.find(Switch);

    // assert
    expect(toggle.state("on")).toEqual(false);

    // act
    switchComponent.props().onClick();

    // assert
    expect(toggle.state("on")).toEqual(true);
  });
});
