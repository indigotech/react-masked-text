// @ts-nocheck
import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TextInputMask from "../src/text-input-mask";
import * as React from "react";

beforeAll(() => {
  // Create a spy on console (console.error in this case) and provide some mocked implementation
  jest.spyOn(console, "error").mockImplementation(() => {});
});
afterAll(() => {
  // Restore mock after all tests are done, so it won't affect other test suites
  console.error.mockRestore();
});
afterEach(() => {
  // Clear mock (all calls etc) after each test.
  // It's needed when you're using console somewhere in the tests so you have clean mock each time
  console.error.mockClear();
});

test("TextInputMask renders uncontrolled component", () => {
  const result = render(<TextInputMask kind="cpf" defaultValue="123" />);
  expect(result).toMatchSnapshot();
});

test("TextInputMask renders controlled component", () => {
  const { rerender } = render(<TextInputMask kind="cpf" value={""} />);
  expect(screen.getByDisplayValue("")).toMatchSnapshot();

  rerender(<TextInputMask kind="cpf" value={"123123"} />);
  expect(screen.getByDisplayValue("123.123")).toMatchSnapshot();
});

test("TextInputMask renders hybrid component (controlled and uncontrolled). This is not recommended and will throw an error on the console.", () => {
  expect(() =>
    render(<TextInputMask kind="cpf" value={"123"} defaultValue={""} />)
  ).toThrow(
    "Use either the defaultValue prop, or the value prop, but not both"
  );
});

test("TextInputMask renders controlled component with initial value", () => {
  let value = "223";
  const onChange = (val) => (value = val);
  const result = render(
    <TextInputMask kind="cpf" onChangeText={onChange} value={value} />
  );
  expect(result).toMatchSnapshot();
});
