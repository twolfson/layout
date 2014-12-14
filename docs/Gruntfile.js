// Define our grunt file
module.exports = function (grunt) {
  // Configure the spritesheet
  grunt.initConfig({
    sprite: {
      'top-down': {
        src: ['small.png', 'wide.png', 'tall.png'],
        destImg: 'top-down.png',
        destCSS: 'top-down.css',
        algorithm: 'top-down'
      },
      'left-right': {
        src: ['small.png', 'wide.png', 'tall.png'],
        destImg: 'left-right.png',
        destCSS: 'left-right.css',
        algorithm: 'left-right'
      },
      'diagonal': {
        src: ['small.png', 'wide.png', 'tall.png'],
        destImg: 'diagonal.png',
        destCSS: 'diagonal.css',
        algorithm: 'diagonal'
      },
      'alt-diagonal': {
        src: ['small.png', 'wide.png', 'tall.png'],
        destImg: 'alt-diagonal.png',
        destCSS: 'alt-diagonal.css',
        algorithm: 'alt-diagonal'
      },
      'binary-tree': {
        src: ['small.png', 'wide.png', 'tall.png'],
        destImg: 'binary-tree.png',
        destCSS: 'binary-tree.css',
        algorithm: 'binary-tree'
      },
    }
  });

  // Load in grunt-spritesmith
  grunt.loadTasks('grunt-spritesmith');

  // Run the sprite task by default
  grunt.registerTask('default', ['sprite']);
};
