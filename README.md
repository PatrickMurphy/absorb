Absorb
================

A recursive deep object merge utility function. ObjectParam1 absorbs properties from ObjectParam2

## Installation

	npm install absorb

## Usage

	var absorb = require('absorb');
	var obj1, obj2, obj3;
	
	obj1 = { foo: 123, bar: 456 };
	obj2 = { bar: 123, key: 'value' }
	
	absorb(obj1, obj2);
	
	console.log(obj1); // Output: { foo: 123, bar: 123, key: 'value' }

You can use the optional third parameter set to `true` to make a clone.
	
	obj1 = { foo: 123, bar: 456 };
	obj3 = absorb(obj1, obj2, true);
	
	console.log(obj1); // Output: { foo: 123, bar: 456 }
	console.log(obj3); // Output: { foo: 123, bar: 123, key: 'value' }
	
You can use the optional fourth parameter set to `true` to only add properties that are not already set in the destination object. Note: This will not overwrite sub-properties in deep objects, however it will add new ones
	
	obj1 = { person: {name: 'Patrick', lastname: 'Murphy'}, career: 'Software Engineer'};
	obj2 = { person: {name: 'Jered', height: '6`1'}, career: 'Investment Banker', hobbies: 'photography'};
	absorb(obj1, obj2, false, true);
	
	console.log(obj1); // Output: { person: {name: 'Patrick', lastname: 'Murphy', height: '6`1'}, career: 'Software Engineer', hobbies: 'photography'};

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.


## Release History

* 1.0.1 Fix cloning not functioning correctly Issue reported on github
* 1.0.0 Add PreserveObject parameter, allowing option to only merge if object 1 does not contain key
* 0.1.0 Initial release