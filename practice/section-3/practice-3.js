'use strict';

function createUpdatedCollection(collectionA, objectB) {
 // 在此写代码
 var arr = [];
 var a ;
 a=0;
 let j = 1;
 for(let i = 0; i < collectionA.length ; i++)
 {

     if(collectionA[i]==collectionA[i+1])
     {
         j++;
         continue;
     }
     else
     {
         arr[a]={
             key: collectionA[i], 
             count: j
         }
         j=1;
         a++;

     }          
 }  
 for(let i = 0; i < objectB.value.length; i++)
 {
     for(let j = 0; j < arr.length; j++)
     {
         if(objectB.value[i]==arr[j].key)
         {
             arr[j].count = arr[j].count - parseInt(arr[j].count/3);
         }
     }
 }
 return arr;
}
