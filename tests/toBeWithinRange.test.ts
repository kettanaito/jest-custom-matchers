it("asserts the number is within the range", () => {
  expect(5).toBeWithinRange(3, 5);
  expect(3).toBeWithinRange(0, 5);
});

it("supports inversed matches", () => {
  expect(0).not.toBeWithinRange(1, 2);
  expect(5).not.toBeWithinRange(10, 20);
});
