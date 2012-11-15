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
    test.expect(4);

    // A top-down layout
    var topDown = layout('top-down');
      // can accept a new item
      topDown.addItem('item', {'width': 20, 'height': 30});
        // and export a layout
        var result = topDown['export']();
        test.equal(result.height, 30, 'Result has a height of 30');
        test.equal(result.width, 20, 'Result has a width of 20');
        test.ok(result.items, 'Result has items');
        test.ok(result.items.item, 'Item exists');

    // Complete the test
    test.done();
  // },
  // 'top-down': function (test) {
  //   test.expect(3);

  //   // A top-down layout
  //   var topDown = layout('top-down');
  //     // with multiple items
  //     topDown.addMatrix('medium', [20, 10]); // 20 x 10
  //     topDown.addMatrix('small', [10, 10]);  // 30 x 20
  //     topDown.addMatrix('large', [50, 40]);  // 80 x 60
  //       // organizes them in a top-down manner
  //       var result = topDown['export']();
  //       test.equal(result.height, 80, 'Result has a height of 80');
  //       test.equal(result.width, 60, 'Result has a width of 60');
  //       test.equal(result.items.length, 1, 'Result has 1 item');

  //   test.done();
  }
};
