const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');

/*
gulp.task - define tasks
gulp.src - point to files to use
gulp.dest - point to folder to output
gulp.watch - watch files and folders for changes
*/

//logs message

gulp.task('message', function(){
  return console.log('Gulp is running...');
});

// optimise images
gulp.task('imageMin', function() {
  gulp.src('assets/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images'));
});

 //compile sass
 gulp.task('sass', function(){
  gulp.src('src/sass/*scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('dist/css'));
 });

 // run all commands on start
 gulp.task('default', ['message', 'imageMin', 'sass']);

 //gulp watch

 gulp.task('watch', function(){
  gulp.watch('src/sass/*scss', ['sass']);
  gulp.watch('assets/*', ['imageMin']);
 });