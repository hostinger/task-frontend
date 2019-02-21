var gulp = require('gulp');
var sassConvert = require('gulp-sass');
var livereload = require('gulp-livereload');

gulp.task('sassConvert', function(){
	return gulp.src('app/sass/styles.sass')
		.pipe(sassConvert())
		.pipe(gulp.dest('app/css'))
		.pipe(livereload());
});

gulp.task('watch', function() {
	var server = livereload();
	gulp.watch('app/sass/*.sass', gulp.series('sassConvert'));
});

gulp.task('default', gulp.series('sassConvert', 'watch'));