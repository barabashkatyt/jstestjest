import { forEach } from "./01";

const mockCallback = jest.fn((x) => 30 + x);
forEach([0, 1], mockCallback);

describe("test mockCallback", () => {
  test("The mock function is called twice", () => {
    expect(mockCallback.mock.calls.length).toBe(2);
  });

  test("The first argument of the first call to the function was 0", () => {
    expect(mockCallback.mock.calls[0][0]).toBe(0);
  });

  test("The first argument of the second call to the function was 1", () => {
    expect(mockCallback.mock.calls[1][0]).toBe(1);
  });

  test("The return value of the first call to the function was 30", () => {
    expect(mockCallback.mock.results[0].value).toBe(30);
  });
});
