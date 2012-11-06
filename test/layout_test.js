var layout = require('../lib/layout.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['awesome'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'addItem': function (test) {
    test.expect(3);

    // A top-down layout
    var topDown = layout('top-down');
      // can accept a new item
      topDown.addItem('item', {'width': 20, 'height': 30});
        // and export a layout
        var result = topDown['export']();
        test.equal(result.width, 20, 'Result has a width of 20');
        test.equal(result.height, 30, 'Result has a height of 30');
        test.equal(result.items.length, 1, 'Result has 1 item');

    // Complete the test
    test.done();
  // },
  // 'top-down': function (test) {
  //   test.expect(1);

  //   var items = {
  //     'medium': [20, 20],
  //     'small': [10, 10],
  //     'large': [50, 50]
  //   };

  //   // tests here
  //   test.equal(layout.awesome(), 'awesome', 'should be awesome.');
  //   test.done();
  }
};
