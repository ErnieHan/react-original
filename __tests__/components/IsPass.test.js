import React from "react";
import { shallow } from "enzyme";
import IsPass from "../../src/components/IsPass";

describe("TESTING_ISPASS_COMPONENT", () => {
  const component = shallow(<IsPass />);

  test("COMPONENT_DISPLAY_SUCCESSFUL", () => {
    expect(component.find("Content")).toHaveLength(1);
    expect(component.find("Content").text()).toEqual("foo");
  });

  test("ONCHANGE_TEST", () => {
    component.find("Input").simulate("change", { target: { value: "ernie" } });
    expect(component.find("Input").prop("value")).toEqual("ernie");
  });

  test("CLICK_TEST", () => {
    const handleClick = jest.spyOn(component.instance(), "handleClick");
    component.instance().handleClick();
    expect(handleClick).toBeCalled();
    expect(component.find("Content").text()).toEqual("bar");
  });

  test("FUNCTION_CALLBACK", () => {
    const instance = component.instance();
    const login = jest.spyOn(instance, "login");
    instance.forceUpdate();
    component.find("div.ernie").simulate("click");
    component.find("div.ernie").simulate("click");
    component.find("div.ernie").simulate("click");
    expect(login).toHaveBeenCalledTimes(3);
  });
});
