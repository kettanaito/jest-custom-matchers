interface Data {
  friends: Set<string>;
}

it("asserts partial values of a Set asymmetrically", () => {
  expect({ friends: new Set(["john", "kate"]) }).toEqual<Data>({
    friends: expect.setContaining(["kate"]),
  });
});

it("supports inversed matches", () => {
  expect({ friends: new Set(["john", "kate"]) }).not.toEqual<Data>({
    friends: expect.setContaining(["wilson"]),
  });
});
