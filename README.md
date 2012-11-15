# layout

Organize and layout items based on various algorithms

## Getting Started
Install the module with: `npm install layout`

```javascript
// Load in layout
var layout = require('layout');

// Generate a new layer to organize items on
var layer = layout('top-down');

// Add items that you want to organize
layer.addItem({'height': 20, 'width': 10, 'meta': 'medium'});
layer.addItem({'height': 10, 'width': 10, 'meta': 'small'});
layer.addItem({'height': 50, 'width': 40, 'meta': 'large'});

// Export the items
var items = layer['export']();

// We get back the width and height of the pack as well as organized items
{
    width: 40,
    height: 80,
    items: [{
        height: 10,
        width: 10,
        meta: 'small',
        x: 0,
        y: 0
    }, {
        height: 20,
        width: 10,
        meta: 'medium',
        x: 0,
        y: 10
    }, {
        height: 50,
        width: 40,
        meta: 'large',
        x: 0,
        y: 30
    }]
}
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2012 Todd Wolfson
Licensed under the MIT license.
