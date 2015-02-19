// Load in our binary packer
var pack = require('bin-pack');

exports.sort = function (items) {
  // `bin-pack` automatically sorts. Make this a noop.
  return items;
};

exports.placeItems = function (items) {
  // Pack the items
  pack(items, {inPlace: true});

  // Return the packed items
  return items;
};
