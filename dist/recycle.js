(function(root, undefined) {

  "use strict";


/* recycle main */

// Base function.
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

// Version.
recycle.VERSION = '0.0.1';


// Export to the root, which is probably `window`.
root.recycle = recycle;


}(this));
