"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "rduce",
              			"path": "rduce/rduce.js",
              			"file": "rduce.js",
              			"module": "rduce",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/rduce.git",
              			"test": "rduce-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Alternative array reduce function.
              	@end-module-documentation
              */var _from = require("babel-runtime/core-js/array/from");var _from2 = _interopRequireDefault(_from);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var rduce = function rduce(array, reducer, defer) {
	/*;
                                                   	@meta-configuration:
                                                   		{
                                                   			"array:required": Array,
                                                   			"reducer:required": "function",
                                                   			"defer": "*"
                                                   		}
                                                   	@end-meta-configuration
                                                   */

	try {
		array = (0, _from2.default)(array);

	} catch (error) {
		array = [];
	}

	var result = defer = arguments.length == 2 ? array[0] : defer;

	if (
	array.length === 0 ||
	typeof reducer != "function")
	{
		return result;
	}

	var index = arguments.length == 2 ? 0 : -1;

	try {
		while (++index < array.length) {
			result = reducer.call(array, result, array[index], index, array);
		}

	} catch (error) {
		throw new Error("cannot execute reduce function, " + error.stack);

	} finally {
		array = undefined;

		reducer = undefined;
	}

	return result;
};

module.exports = rduce;

//# sourceMappingURL=rduce.support.js.map