// Load in our binary packer
var binpacking = require('binpacking'),
    GrowingPacker = binpacking.GrowingPacker;

function binaryPackingAlgorithm(items) {
  // Sort the items by their height
  blocks.sort(function (a, b) {
    return a.height - b.height;
  });

  // Rename all `width` and `height`
  blocks.forEach(function (block) {
    block.h = block.height;
    block.w = block.width;
  });

  // Pack the blocks
  var packer = new GrowingPacker();
  packer.fit(blocks);

  // Remove the `w` and `h` properties
  blocks.forEach(function (block) {
    delete block.h;
    delete block.w;
  });

  // Return the packed blocks
  return blocks;
}

module.exports = binaryPackingAlgorithm;