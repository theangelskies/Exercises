
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice
const duplicateCount = require("./duplicate.js");

const cases = [
  ["abcde", 0],
  ["aabbcde", 2],
  ["aabBcde", 2],
  ["indivisibility", 1],
  ["Indivisibilities", 2],
  ["ABBA", 2],
];

test("duplicateCount works for multiple inputs", () => {
  cases.forEach(([input, expected]) => {
    expect(duplicateCount(input)).toEqual(expected);
  });
});

