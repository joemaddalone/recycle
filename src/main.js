/* recycle main */
var recycle = function(arr,ret) {
	if (arr instanceof Array) {
		arr.index = arr.index || 0;
		if(arr.index===arr.length) {arr.index=0;}
		ret  = arr[arr.index];
		arr.index++;
		return ret;
	}
	else {
		return "not an array";
	}
};

recycle.VERSION = '0.0.1';
root.recycle = recycle;