function mincost(arr)
{ 
//write your code here
let mincost=0;
	while(arr.length>1){
		arr.sort((a,b) {
			return a-b})
		let first=arr.shift();
		let second=arr.shift();

		let sum =first+second;
		mincost+=sum;
		arr.push(sum);
	}
	return mincost;
	  
}

module.exports=mincost;
