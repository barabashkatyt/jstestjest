const myMock = jest.fn((x, y) => x * y);
myMock(1, 2);

describe("Mock func and different tests with it", () => {
  test("The function was called exactly once", () => {
    expect(myMock.mock.calls.length).toBe(1);
  });
  test("The first arg of the first call", () => {
    expect(myMock.mock.calls[0][0]).toBe(1);
  });
  test("The second arg of the first call", () => {
    expect(myMock.mock.calls[0][1]).toBe(2);
  });
  test("The return value of the first call", () => {
    expect(myMock.mock.results[0].value).toBe(2);
  });
  test("This function was instantiated exactly once", () => {
    expect(myMock.mock.instances.length).toBe(1);
  });
});

describe("test null,zero,number,string with jest", () => {
  test("null", () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });
  test("zero", () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });
  test("number tests", () => {
    const value = 10 + 10;
    expect(value).toBe(20);
    expect(value).toBeGreaterThan(10);
    expect(value).toBeLessThan(30);
    expect(value).toBeLessThanOrEqual(20);
  });
  test("string tests", () => {
    const str = "string with text";
    expect(str.length).toBe(16);
    expect(str).not.toMatch(/ara/);
    expect(str).toMatch(/text/);
  });
  test("array tests", () => {
    const arr = [1, 2, 3, 5, 8];
    expect(arr.length).toBe(5);
    expect(arr).toContain(3);
    expect(arr).not.toContain(10);
  });
  test("check finction on throwing errors", () => {
    const t = () => {
      throw new TypeError();
    };
    expect(t).toThrow(TypeError);
  });
});
