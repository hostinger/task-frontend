var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var babel = require("gulp-babel");


gulp.task('sass', function () {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task("script", function () {
    return gulp.src("src/script.js")
      .pipe(babel())
      .pipe(gulp.dest("dist"));
  });

gulp.task('watch', function () {
    gulp.watch('./src/scss/*.scss', gulp.series('sass'));
    gulp.watch('./src/*.js', gulp.series('script'));

});