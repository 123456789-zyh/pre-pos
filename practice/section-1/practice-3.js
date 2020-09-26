'use strict';

function collectSameElements(collectionA, objectB) {
//  在这里写代码
var arr = [];
for(let i = 0; i < collectionA.length ; i++)
{
    for(let j = 0; j < objectB.value.length ; j++)
    {
        if(collectionA[i]==objectB.value[j])
        {
            arr[arr.length] = collectionA[i];
            break;
        }
    }
}
return arr;	
}
