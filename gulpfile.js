const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const imageminMozjpeg = require('imagemin-mozjpeg');

// constants
const src = './src';
const dest = './dist';

// copy html files to destination folder
function html() {
    return (
        gulp
            .src(src + '/**/*.html')
            .pipe(gulp.dest(dest))
            // stream to all browsers
            .pipe(browserSync.stream())
    );
}

// copy js files to destination folder
function js() {
    return (
        gulp
            .src(src + '/**/*.js')
            .pipe(gulp.dest(dest))
            // stream to all browsers
            .pipe(browserSync.stream())
    );
}

// compile scss into css
function css() {
    // my scss file
    return (
        gulp
            .src(src + '/scss/**/*.scss')
            // pass file through sass compiler
            .pipe(sass().on('error', sass.logError))
            // add "min" keyword to file
            .pipe(rename({ suffix: '.min' }))
            // add autoprefixes
            .pipe(postcss([autoprefixer(), cssnano()]))
            // save css to dest
            .pipe(gulp.dest(dest + '/assets/css'))
            // stream to all browsers
            .pipe(browserSync.stream())
    );
}

// optimize Images
function images() {
    return (
        gulp
            .src(src + '/assets/images/**/*')
            // check not to compress again
            .pipe(newer(dest + '/assets/images'))
            .pipe(
                imagemin([
                    // gif
                    imagemin.gifsicle({ interlaced: true }),
                    // jpg
                    imageminMozjpeg({
                        quality: 50
                    }),
                    // png
                    imagemin.optipng({ optimizationLevel: 5 }),
                    // svg
                    imagemin.svgo({
                        plugins: [
                            {
                                removeViewBox: false,
                                collapseGroups: true
                            }
                        ]
                    })
                ])
            )
            // save to dest
            .pipe(gulp.dest(dest + '/assets/images'))
    );
}

function watch() {
    browserSync.init({
        server: {
            baseDir: dest
        }
    });
    gulp.watch(src + '/scss/**/*.scss', css);
    gulp.watch(src + '/*.html', html).on('change', browserSync.reload);
    gulp.watch(src + '/assets/images/**/*.*', images);
    gulp.watch(src + '/js/**/*.js').on('change', browserSync.reload);
}

const build = gulp.series(gulp.parallel(images, css, html, js));

exports.html = html;
exports.js = js;
exports.css = css;
exports.images = images;
exports.watch = watch;
exports.build = build;
