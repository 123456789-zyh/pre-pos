'use strict';

function createUpdatedCollection(collectionA, objectB) {
 // 在此写代码
 
 var str = [];
    var n=1;
    for(let i = 0; i < collectionA.length ; i++)
    {   
        if(collectionA[i].length!=1)
        {
            let s = collectionA[i]
            str[str.length] = collectionA[i];
            collectionA[i] = s[0];
            n++;
        }
    }

    var arr = [];
    var t ;
    t=0;
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
            arr[t]={
                key: collectionA[i], 
                count: j
            }
            j=1;
            t++;

        }          
    } 

    for(let i = 0; i < str.length ; i++)
    {
        var c = str[i].split('-');
        for(let j = 0; j < arr.length; j++)
        {
            if(arr[j].key == c[0])
            {
                let n = arr[j].count
                arr[j].count = parseInt(c[1])+ n - 1;
            }
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
