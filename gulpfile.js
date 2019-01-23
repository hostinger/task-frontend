const gulp = require('gulp'),
 connect = require('gulp-connect');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-terser');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const htmlrender = require('gulp-htmlrender');


gulp.task('connect', function() {
    connect.server({
        root: 'dist',
        port: '8100',
        livereload: true
      });
    });

gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(gulp.dest('./app'))
    .pipe(connect.reload());
});

  
// Logs Message
gulp.task('message', function(){
  return console.log('Gulp is running...');
});

// Copy All HTML files
gulp.task('copyHtml', function(){
  gulp.src('./app/*/*/*.html')
      .pipe(gulp.dest('dist'));
});

// Optimize Images
gulp.task('imageMin', () =>
	gulp.src('app/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
);

// Minify JS
gulp.task('minify', function(){
  gulp.src('app/js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
});

// Compile Sass
gulp.task('sass', function(){
  gulp.src('app/sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('dist/css'));
});

// Scripts
gulp.task('scripts', function(){
  gulp.src('app/js/*.js')
      .pipe(concat('main.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
});

gulp.task('render', function() {
	return gulp.src('app/index.html', {read: false})
		.pipe(htmlrender.render())
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
  gulp.watch('app/js/*.js', ['scripts']);
  gulp.watch('app/images/*', ['imageMin']);
  gulp.watch('app/*.html', ['copyHtml']);
  gulp.watch(['app/*/*/*.html'], ['render']);
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch('app/**/*.scss', ['sass']);
});

gulp.task('default', ['connect', 'message', 'copyHtml', 'imageMin', 'sass', 'scripts', 'render','watch']);




