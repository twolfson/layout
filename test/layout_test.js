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

exports['layout'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'addItem': function (test) {
    test.expect(4);

    // A top-down layout
    var topDown = layout('top-down');
      // can accept a new item
      var meta = {'Hello': 'World!'};
      topDown.addItem({'height': 30, 'width': 20, 'meta': meta});
        // and export a layout
        var result = topDown['export']();
        test.strictEqual(result.height, 30, 'Result has a height of 30');
        test.strictEqual(result.width, 20, 'Result has a width of 20');
        test.strictEqual(result.items.length, 1, 'Result has 1 item');
        test.strictEqual(result.items[0].meta, meta, 'Item meta data is preserved');

    // Complete the test
    test.done();
  },
  'top-down': function (test) {
    test.expect(6);

    // A top-down layout
    var topDown = layout('top-down');
      // with multiple items
      topDown.addItem({'height': 20, 'width': 10, 'meta': 'medium'}); // 20 x 10
      topDown.addItem({'height': 10, 'width': 10, 'meta': 'small'});  // 30 x 10
      topDown.addItem({'height': 50, 'width': 40, 'meta': 'large'});  // 80 x 40
        // organizes them in a top-down manner
        var result = topDown['export']();
        test.equal(result.height, 80, 'Result has a height of 80');
        test.equal(result.width, 40, 'Result has a width of 40');
        test.equal(result.items.length, 3, 'Result has 3 items');
        test.equal(result.items[1].x, 0, 'Second item is 0 pixels from the left');
        test.equal(result.items[1].y, 10, 'Second item is 10 pixels from the top');
        test.equal(result.items[2].y, 30, 'Third item is 30 pixels from the top');

    test.done();
  },
  'left-right': function (test) {
    test.expect(6);

    // A top-down layout
    var topDown = layout('left-right');
      // with multiple items
      topDown.addItem({'height': 20, 'width': 10, 'meta': 'medium'}); // 20 x 10
      topDown.addItem({'height': 10, 'width': 10, 'meta': 'small'});  // 20 x 20
      topDown.addItem({'height': 50, 'width': 40, 'meta': 'large'});  // 50 x 60
        // organizes them in a top-down manner
        var result = topDown['export']();
        test.equal(result.height, 50, 'Result has a height of 50');
        test.equal(result.width, 60, 'Result has a width of 60');
        test.equal(result.items.length, 3, 'Result has 3 items');
        test.equal(result.items[1].y, 0, 'Second item is 0 pixels from the top');
        test.equal(result.items[1].x, 10, 'Second item is 10 pixels from the left');
        test.equal(result.items[2].x, 20, 'Third item is 20 pixels from the left');

    test.done();
  }
};
