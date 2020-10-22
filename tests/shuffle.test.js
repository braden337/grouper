const { shuffle } = require("../lib/shuffle");

test("Returns a shuffled array", () => {
  expect(shuffle([1, 2, 3, 4, 5])).not.toStrictEqual([1, 2, 3, 4, 5]);
});
