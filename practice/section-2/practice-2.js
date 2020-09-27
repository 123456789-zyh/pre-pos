'use strict';

function countSameElements(collection) {
// 在此写代码
let counters = [];
for (let element of collection) {
  let [key, count] = element.split('-');
  let existedCounter = findObj(key, counters);
  count = getCount(count);
  if (existedCounter) {
    existedCounter.count += count;
  } else {
    counters.push({key: key, count: count});
  }
}
return counters;
}

function findObj(key, counters) {
for (let counter of counters) {
  if (counter.key === key) {
    return counter;
  }
}
}

function getCount(count) {
if (count) {
  return parseInt(count);
}
return 1;
}
