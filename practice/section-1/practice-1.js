'use strict';

function collectSameElements(collectionA, collectionB) {
		//  在这里写代码
		var arr = [];
		for(let i = 0; i < collectionA.length ; i++)
		{
			for(let j = 0; j < collectionB.length ; j++)
			{
				if(collectionA[i]==collectionB[j])
				{
					arr[arr.length] = collectionA[i];
					break;
				}
			}
		}
		return arr;
		
}
