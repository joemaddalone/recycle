(function(root, undefined) {

  "use strict";


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

    /**
     * Expose recycle
     */
    // AMD suppport
    if (typeof root.define === 'function' && root.define.amd !== undefined) {
        root.define('recycle', [], function () {
            return recycle;
        });

    // CommonJS suppport
    } else if (typeof module !== 'undefined' && module.exports !== undefined) {
        module.exports = recycle;

    // Default
    } else {
        root.recycle = recycle;
    }

}(this));
