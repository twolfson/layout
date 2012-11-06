function PackingSmith(algorithm) {
  this.packedItems = [];
  this.algorithm = algorithm;
}
PackingSmith.prototype = {
  'addItem': function (name, item) {
    // Add the item
    var coords = this.algorithm(item),
        saveObj = {
          'name': name,
          'coordinates': coords,
          'item': item
        };
    this.packedItems.push(saveObj);
  },
  // Method to normalize coordinates to 0, 0
  // This is bad to do mid-addition since it messes up the algorithm
  'normalizeCoordinates': function () {
    // Grab the items
    var packedItems = this.packedItems;

    // Find the most negative x and y
    var minX = Infinity,
        minY = Infinity;
    packedItems.forEach(function (packedItem) {
      var coords = packedItem.coordinates;
      minX = Math.min(minX, coords.x);
      minY = Math.min(minY, coords.y);
    });

    // Offset each item by -minX, -minY; effectively resetting to 0, 0
    packedItems.forEach(function (packedItem) {
      var coords = packedItem.coordinates;
      coords.x -= minX;
      coords.y -= minY;
    });
  },
  'getStats': function () {
    // Get the endX and endY for each item
    var packedItems = this.packedItems,
        coordsArr = packedItems.map(function (packedItem) {
          return packedItem.coordinates;
        }),
        minXArr = coordsArr.map(function (coords) {
          return coords.x;
        }),
        minYArr = coordsArr.map(function (coords) {
          return coords.y;
        }),
        maxXArr = coordsArr.map(function (coords) {
          return coords.x + coords.width;
        }),
        maxYArr = coordsArr.map(function (coords) {
          return coords.y + coords.height;
        });

    // Get the maximums of these
    var retObj = {
          'minX': Math.max.apply(Math, minXArr),
          'minY': Math.max.apply(Math, minYArr),
          'maxX': Math.max.apply(Math, maxXArr),
          'maxY': Math.max.apply(Math, maxYArr)
        };

    // Return the stats
    return retObj;
  },
  'getItems': function () {
    return this.packedItems;
  },
  'exportItems': function () {
    // Normalize the coordinates to 0, 0
    this.normalizeCoordinates();

    // Return the packed items
    return this.packedItems;
  },
  'export': function () {
    // Grab the stats, coordinates, and items
    var items = this.exportItems(),
        stats = this.getStats();

    // Generate and return our retObj
    var retObj = {
          'width': stats.maxX,
          'height': stats.maxY,
          'items': items
        };
    return retObj;
  }
};

// Export PackingSmith
module.exports = PackingSmith;