module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "src/style/css/main.css": "src/style/less/__extend.less",
          "src/style/css/ie8.css": "src/style/less/ie8.less"
        }
      }
    },
    watch: {
      styles: {
        files: ['src/style/less/**/*.less'],
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
};