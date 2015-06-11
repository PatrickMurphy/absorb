var isObject = require('is-object');

var absorb = function (destObject, sourceObject, preserveOriginal) {
	// default value
	preserveOriginalObject = preserveOriginal || false;
	
	var index,
			tempObj = destObject;

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
							tempObj[index] = sourceObject[index]; // overwrite previous value or add new
					}
			}
	}
		
	if(!preserveOriginal) {
		destObject = tempObj;
	}
	return tempObj;
};

module.exports = absorb;