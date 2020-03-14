
const sass = require('node-sass');


module.exports = function (grunt){

    // Configuration
    grunt.initConfig({
        //pass in optinons to plugins, references to files

        // concat: {
        //     js: {
        //         src: ['js/*.js'],
        //         dest: 'build/app.js'
        //     }
        // },
        sass: {
            options: {
                implementation: sass,
                sourceMap: false,
                style: 'expanded'
            },
            dist: {
                files: {
                    'css/main.css': 'css/sass/styles.scss'
                }
            },
        },
        babel: {
            options: {
              sourceMap: true
              
            },
            dist: {
              files: {
                'release/mainbabel.js': 'js/main.js'
              }
            }
          },
        uglify: {
            build: {
                files: [{
                    src: 'release/mainbabel.js',
                    dest: 'release/app.min.js'
                }]
            }
        }, 
        autoprefixer: {
            options: {
                // We need to `freeze` browsers versions for testing purposes.
                browsers: ['last 2 versions', 'ie 8', 'ie 9']
            },
            single_file: {
                src: 'css/main.css',
                dest: 'release/prefixed.css'
            }
          },
        cssmin: {
            target: {
                src: 'release/prefixed.css',
                dest: 'release/main.min.css'
            }
        },
        watch: {
            files: ['css/sass/**/*.scss'],
            tasks: ['sass']
        }
    });


    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-babel');

    //Register tasks
    grunt.registerTask('concat-js', ['concat:js']);
    grunt.registerTask('default', ['babel']);
}
