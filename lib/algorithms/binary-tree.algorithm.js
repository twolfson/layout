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

  // Return the packed items
  return packer.pack(items);
};
