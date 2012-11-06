/*
 * layout
 * https://github.com/twolfson/layout
 *
 * Copyright (c) 2012 Todd Wolfson
 * Licensed under the MIT license.
 */

exports.awesome = function() {
  return 'awesome';
};

/**
 * Method to add new algorithms via
 * @param {String} name Name of algorithm
 * @param {Function} algorithm Algorithm to bind under name
 */
function addAlgorithm(name, algorithm) {
  // Save the algorithm to algorithms
  algorithms[name] = algorithm;
}
// Make algorithms easier to add
Spritesmith.addAlgorithm = addAlgorithm;
Spritesmith.algorithms = algorithms;

// Add default algorithms
addAlgorithm('top-down', require('./algorithms/top-down.algorithm.js'));
addAlgorithm('bottom-up', require('./algorithms/bottom-up.algorithm.js'));
addAlgorithm('left-right', require('./algorithms/left-right.algorithm.js'));
addAlgorithm('right-left', require('./algorithms/right-left.algorithm.js'));
addAlgorithm('diagonal', require('./algorithms/diagonal.algorithm.js'));
addAlgorithm('negative-diagonal', require('./algorithms/negative-diagonal.algorithm.js'));
addAlgorithm('reverse-diagonal', require('./algorithms/reverse-diagonal.algorithm.js'));