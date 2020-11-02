jest.mock("../request");

import * as user from "../user";

// The assertion for a promise must be returned.
it("works with promises", () => {
  expect.assertions(1);
  return user.getUserName(2).then((data) => expect(data).toEqual("Sasha"));
});
it("works with resolves", () => {
  expect.assertions(1);
  return expect(user.getUserName(5)).resolves.toEqual("Kolia");
});
// Testing for async errors using Promise.catch.
it("tests error with promises", () => {
  expect.assertions(1);
  return user.getUserName(10).catch((e) =>
    expect(e).toEqual({
      error: "User with 10 not found.",
    })
  );
});
