"use strict";

// =========================================================
// Gulp 4 config
// =========================================================

// ------------------------------------------------ requires

const gulp           = require("gulp");
const sass           = require("gulp-sass");
const autoprefixer   = require("gulp-autoprefixer");
const cssbeautify    = require("gulp-cssbeautify");

// ------------------------------------------------ config

const config = {

  html: {
    src:  "./src/html/*.html",
    dest: "./public/"
  },

  sass: {
    src:  "./src/css/style.scss",
    dest: "./public/css/",
    options : {
        autoprefixer : [
            "ie >= 10",
            "ie_mob >= 10",
            "ff >= 30",
            "chrome >= 34",
            "safari >= 7",
            "opera >= 23",
            "ios >= 7",
            "android >= 4.4",
            "bb >= 10"
          ]
    }
  }

};


// ---------------------------------------------- tasks

gulp.task("html", () => {

  return gulp
            .src(config.html.src)
            .pipe(gulp.dest(config.html.dest));

});

gulp.task("css", () => {

  return gulp
            .src(config.sass.src)
            .pipe(
                sass({
                outputStyle: "nested",
                precision: 10,
                includePaths: ["."],
                onError: console.error.bind(console, "Sass error:")
                })
            )
            .pipe(autoprefixer({ browsers: config.sass.options.autoprefixer }))
            .pipe(cssbeautify())
            .pipe(gulp.dest(config.sass.dest));

});

// ---------------------------------------------- watch

const watcher = (src , task) => {

  gulp.watch(src).on('all', gulp.series(task));
      
}

gulp.task('watch-html', () => {

  watcher(config.html.src , 'html');

});


gulp.task( 'watch-css', () => {

  watcher('./src/css/**/*' , 'css');

});

// -------------------------------------------- default task

const run   = gulp.series('html' , 'css');
const watch = gulp.parallel('watch-html' , 'watch-css');

gulp.task('default', gulp.series(run , watch));
