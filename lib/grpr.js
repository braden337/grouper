const { shuffle } = require("./shuffle");
const { chunk, zip } = require("lodash");
const table = require("markdown-table");

const grpr = (names, group_size = 6) => {
  let groups = chunk(shuffle(names), group_size);
  let leftOver = groups.pop();

  if (leftOver.length < group_size && leftOver.length <= groups.length) {
    let i = 0;
    while (leftOver.length) {
      groups[i++].push(leftOver.pop());
    }
  } else if (leftOver.length != groups[0].length) {
    let i = 0;
    while (leftOver.length) {
      groups[i++].push(leftOver.pop());
      if (i == groups.length) i = 0;
    }
  } else {
    groups.push(leftOver);
  }

  let headers = [];
  let numberOfGroups = groups.length;
  groups = zip(...groups);
  for (let i = 0; i < numberOfGroups; ) headers[i++] = `Group #${i}`;
  groups.unshift(headers);

  return table(groups, { align: "c" });
};

module.exports = { grpr };
