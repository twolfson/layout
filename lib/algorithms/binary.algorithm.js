// Load in our binary packer
var binpacking = require('binpacking'),
    GrowingPacker = binpacking.GrowingPacker;

function binaryPackingAlgorithm(items) {
  // Sort the items by their height
  items.sort(function (a, b) {
    return a.height - b.height;
  });

  // Rename all `width` and `height`
  items.forEach(function (item) {
    item.h = item.height;
    item.w = item.width;
  });

  // Pack the items
  var packer = new GrowingPacker();
  packer.fit(items);

  // Remove the `w` and `h` properties
  items.forEach(function (item) {
    delete item.h;
    delete item.w;
  });

  // Return the packed items
  return items;
}

module.exports = binaryPackingAlgorithm;