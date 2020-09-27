'use strict';

function countSameElements(collection) {
 // 在此写代码
 let mySet = new Set();
 for(let i=0;i<collection.length;i++)
 {
     mySet.add(collection[i]);
 }
 let answer = [];
  mySet.forEach(element => {
    answer.push({
      key: element,
      count: 0
    });
  });

 for (let i = 0; i < answer.length; i++) {
   let count = 0;
   collection.forEach(element => {
     if (element === answer[i].key) {
       count += 1;
     }
   });
   answer[i].count = count;
 }
 return answer;
}