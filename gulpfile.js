var gulp = require('gulp');
var webserver = require('gulp-webserver');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('serv', function() {
  gulp.src('site/dist')
    .pipe(webserver({
      livereload: {
          enable: false
      },
      open: true,
      fallback: 'index.html'
    }));
});

gulp.task('compileCSS', function () {
    gulp.src('site/src/sass/main.scss')
    .pipe(sass({
        includePaths: ['./site/src'],
        outputStyle: 'compressed'
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('site/dist/assets/css'));
});

gulp.task('compileHTML', function () {
    gulp.src([
        'site/src/**/**.html'
    ])
    //.pipe(concat('index.html'))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('site/dist'));
});

gulp.task('compilePHP', function () {
    gulp.src([
        'site/src/**/**.php'
    ])
    //.pipe(concat('index.html'))
    // .pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('site/dist'));
});

gulp.task('compileJS', function () {
    gulp.src([
        "site/src/js/*.js"
    ])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('site/dist/assets/js'));
});

gulp.task('buildLibs', function () {
    gulp.src([
        'site/src/js/libs/jquery.js',
        'site/src/js/libs/fullpage.js'
    ])
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(gulp.dest('site/dist/assets/js'));
});

gulp.task('watch', function() {
    gulp.watch('site/src/**/**.scss', ['compileCSS']);
    gulp.watch('site/src/**/**.html', ['compileHTML']);
    gulp.watch('site/src/**/**.js', ['compileJS']);
});

gulp.task('default', ['watch']);

gulp.task('build', ['compileCSS', 'compileHTML', 'compileJS', 'compilePHP', 'buildLibs']);