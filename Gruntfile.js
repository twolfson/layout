module.exports = function(grunt) {
  // Configure our project
  grunt.initConfig({
    test: {
      files: ['test/**/*.js']
    },
    lint: {
      files: ['grunt.js', 'lib/**/*.js', 'test/**/*.js']
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        strict: false
      },
      globals: {
        exports: true
      }
    }
  });

  // Load in dependencies

  // Define our tests
  grunt.registerTask('default', 'lint test');
};
