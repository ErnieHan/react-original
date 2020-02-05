import React from "react";
import { shallow } from "enzyme";
import Jest from "../../src/components/Jest";

describe("元件測試", () => {
  describe("內容測試", () => {
    const component = shallow(<Jest />);
    console.log(component.debug());

    test("元件是否有顯示", () => {
      expect(component.find("Content")).toHaveLength(1);
    });
  });
});
