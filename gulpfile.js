var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps"),
    browserSync = require("browser-sync").create();

var paths = {
  styles: {
    src: "src/scss/**/*.scss",
    dest: "src/css"
  }
};

function style() {
  return gulp
      .src(paths.styles.src)
      .pipe(sourcemaps.init())
      .pipe(sass())
      .on("error", sass.logError)
      .pipe(postcss([autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }), cssnano()]))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(paths.styles.dest))
      .pipe(browserSync.stream());
};

function reload() {
  browserSync.reload();
};

function watch() {
  browserSync.init({
      server: {
          baseDir: "./src",
      }
  });
  gulp.watch(paths.styles.src, style);
  gulp.watch("src/*.html", browserSync.reload);
};

exports.watch = watch;
exports.style = style;

var build = gulp.parallel(style, watch);

gulp.task('build', build);

gulp.task('default', build);
