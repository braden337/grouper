let _ = require("lodash");
let table = require("markdown-table");

let students = [
  "Erin",
  "Krusha",
  "Amanda",
  "Tielin",
  "Koen",
  "Maggie",
  "Hung",
  "Leona",
  "Dhruvalkumar",
  "Braden",
  "Joao",
  "Chao",
  "Katherine",
  "Qingming",
  "Navneet",
  "Creston",
  "Elizabeth",
  "Anton",
  "Adebayo",
  "Chun - Yu",
  "Kunal",
  "Rakshit",
  "Nazmus",
  "Jayson",
  "Abhijeet",
  "Adam",
  "Rhythm",
  "Parsia",
  "Javier",
  "Jonah",
];

let split = 7;
let groups = _.chunk(students, split);
groups = _.shuffle(groups);
let leftOver = groups.pop();

if (leftOver.length < split && leftOver.length <= groups.length) {
  let i = 0;
  while (leftOver.length) {
    groups[i++].push(leftOver.pop());
  }
} else {
  groups.push(leftOver);
}

let numberOfGroups = groups.length;

groups = _.zip(...groups);

let headers = [];
for (let i = 0; i < numberOfGroups; ) headers[i++] = `Group #${i}`;
groups.unshift(headers);

console.log(table(groups, { align: "c" }));
