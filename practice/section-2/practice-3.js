'use strict';

function countSameElements(collection) {
// 在此写代码
var collection = buildCollection(collection);
var result = [];
var count = 1;
for (var i = 0; i < collection.length; i++) {
  if (collection[i] == collection[i+1]) {
    count++;
    var element = collection[i];
  }else {
    result.push({name:element, summary:count});
    count = 1;
  }
}
return result;
}


function buildCollection(collection) {
for(var i = 0; i < collection.length; i++) {

  if(collection[i].length > 1) {

    var len = parseInt(collection[i].substring(2, collection[i].length));
    var words = collection[i].split('');

    for(j = 0; j < len; j++) {
      collection.splice(i, 0, words[0]);
    }

    collection.splice(i+len, 1);
  }
}
return collection;
}
