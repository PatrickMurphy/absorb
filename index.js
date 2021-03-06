var isObject = require('is-object'),
		cloner = require('clone');

var absorb = function (destObject, sourceObject, clone, preserveOriginal) {
	// default values
	clone = clone || false;
	preserveOriginal = preserveOriginal || false;

	var index,
		tempObj = cloner(destObject);

	for (index in sourceObject) { // for each property in source
		if (sourceObject.hasOwnProperty(index)) { // if property is not part of prototype
			if (isObject(sourceObject[index])) {
				// if property is equal to an object, check too
				if (tempObj.hasOwnProperty(index)) {
					// Dest also has this object, let's merge!
					absorb(tempObj[index], sourceObject[index]);
				} else {
					// Dest does not have this object, let's copy the whole object over!
					tempObj[index] = sourceObject[index];
				}
			} else {
				// Property does not contain an object, let's copy over the data
				if(!(preserveOriginal && destObject.hasOwnProperty(index))){
					// overwrite previous value or add new if preserve original
					tempObj[index] = sourceObject[index];
				}
			}
		}
	}

	if (!clone) {
		destObject = tempObj;
	}
	return tempObj;
};

module.exports = absorb;
