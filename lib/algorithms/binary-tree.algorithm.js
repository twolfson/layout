// Load in our binary packer
var boxpack = require('boxpack');

exports.sort = function (items) {
  // Sort the items by their height
  items.sort(function (a, b) {
    return b.height - a.height;
  });
  return items;
};

exports.placeItems = function (items) {
  // Create packer instance
  var packer = new boxpack();

  // Get our packed items
  var packedItems = packer.pack(items);

  // Re-expose meta from the initial set of items
  // DEV: Technially `meta` exists but is hidden as a non-enumerable property via `Object.create`
  //   https://github.com/munro/boxpack/blob/3809aa551a7603f2fee7496fcdaabc4c270d8ddd/boxpack.js#L71-L75
  packedItems.forEach(function updatePackedItems (packedItem, i) {
    packedItem.meta = items[i].meta;
  });

  // Return our adjusted packed items
  return packedItems;
};
