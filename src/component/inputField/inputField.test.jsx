import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import { InputField } from ".";

describe("Should validate Error component", () => {
  it("should validate snapshot", () => {
    const { baseElement } = render(
      <InputField handlecommend={() => {}} clear={() => {}} />
    );
    expect(baseElement).toMatchSnapshot();
  });

  it("should validate onClick", () => {
    const handlecommend = jest.fn();
    const clear = jest.fn();
    const wrapper = shallow(
      <InputField handlecommend={handlecommend} clear={clear} />
    );
    expect(handlecommend).toBeCalledTimes(0);
    expect(clear).toBeCalledTimes(0);
    wrapper.find("#submit").simulate("click");
    wrapper.find("#clear").simulate("click");

    expect(handlecommend).toBeCalledTimes(1);
    expect(clear).toBeCalledTimes(1);
  });
  it("should validate input field and click", () => {
    const handlecommend = jest.fn();
    const clear = jest.fn();
    const wrapper = shallow(
      <InputField handlecommend={handlecommend} clear={clear} />
    );

    wrapper
      .find("#inputCommend")
      .props()
      .onChange({ target: { value: "place 1,2,west" } });

    wrapper.find("#submit").simulate("click");

    expect(handlecommend).toBeCalledTimes(1);
    expect(handlecommend).toBeCalledWith("PLACE 1,2,WEST");
  });
});
