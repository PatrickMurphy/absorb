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

  You can use the optional third parameter set to true to preserve the original object, for example to make a clone.
	
	obj1 = { foo: 123, bar: 456 };
	obj3 = absorb(obj1, obj2, true);
	
	console.log(obj1); // Output: { foo: 123, bar: 456 }
	console.log(obj3); // Output: { foo: 123, bar: 123, key: 'value' }

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Planned Features
Allow option to only merge if object 1 does not contain key

## Release History

* 0.1.0 Initial release