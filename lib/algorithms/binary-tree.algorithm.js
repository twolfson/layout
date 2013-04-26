// Load in our binary packer
var boxpack = require('boxpack');

function binaryTreePackingAlgorithm(items) {
  // Pack the items
  var bin = boxpack(),
      packedItems = bin.pack(items);

  console.log(packedItems);

  // Return the packed items
  return packedItems;
}

module.exports = binaryTreePackingAlgorithm;