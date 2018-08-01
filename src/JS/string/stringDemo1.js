

let str = "一二三四五六七八九十一.xls"; 
// const str = "导入机会-站点不存在-201712201212.xlsx"; 
if(str.length > 12){
	const arr = str.split(".");
	if((str.length - arr[arr.length-1].length) > 12){
		str = str.slice(0,12) + '...' + arr[arr.length-1]
		console.log(1,str)
	}else{
		console.log(2,str)
	}
}else{
	console.log(3,str)
}
