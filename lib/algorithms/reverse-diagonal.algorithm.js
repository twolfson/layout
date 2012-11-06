// Add in reverse-diagonal algorithm
function reverseDiagonalAlgorithm (item) {
  var x = this.x || 0,
      y = this.y || 0,
      itemWidth = item.width,
      itemHeight = item.height;

  // The down-right of our current position
  var saveItem = {
        'x': x - itemWidth,
        'y': y,
        'width': itemWidth,
        'height': itemHeight
      };

  // Decrement the x and increment y
  this.x = x - itemWidth;
  this.y = y + itemHeight;

  // Return the save item
  return saveItem;
}

// Export our algorithm
module.exports = reverseDiagonalAlgorithm;