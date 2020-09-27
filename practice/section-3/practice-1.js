'use strict';

function createUpdatedCollection(collectionA, objectB) {
// 在此写代码
for(let i = 0; i < objectB.value.length; i++)
{
    for(let j = 0; j < collectionA.length; j++)
    {
        if(objectB.value[i]==collectionA[j].key)
        {
            collectionA[j].count = collectionA[j].count - 1;
        }
    }
}
return collectionA;	
}
