var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');
var htmlreplace = require('gulp-html-replace');
var webserver = require('gulp-webserver');
var pump = require('pump');

gulp.task('default', ['js', 'cssmin', 'html-replace', 'htmlmin-views', 'libs', 'assets'], function() {});

gulp.task('js', function() {
    return gulp.src('./js/**/*.js')
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('lint', function() {
   return gulp.src('./js/**/*.js')
       .pipe(jshint())
       .pipe(jshint.reporter('default', { verbose: true}));
});

gulp.task('cssmin', function() {
   return gulp.src('./css/**/*.css')
       .pipe(cssmin())
       .pipe(rename({suffix: '.min'}))
       .pipe(gulp.dest('./dist/'));
});

gulp.task('htmlmin-views', function(){
    return gulp.src('./views/**/*.html')
        .pipe(htmlmin({collapseWhitespace:true}))
        .pipe(gulp.dest('./dist/views/'));
});

gulp.task('html-replace', function(){
   return gulp.src('./index.html')
       .pipe(htmlreplace({
           'css':'style.min.css',
           'js':'app.min.js'
       }))
       .pipe(gulp.dest('./dist/'));
});

gulp.task('libs', function() {
   return gulp.src('./libs/**/*')
       .pipe(gulp.dest('./dist/libs/'));
});

gulp.task('assets', function() {
   return gulp.src('./assets/**/*')
       .pipe(gulp.dest('./dist/assets/'));
});

gulp.task('serve', function() {
   return gulp.src('./dist/')
       .pipe(webserver({
            open:true
        }));
});


