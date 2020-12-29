const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');
const htmlreplace = require('gulp-html-replace');
const webserver = require('gulp-webserver');
const cleanCSS = require('gulp-clean-css');

const paths = {
	scripts: {
		src: './js/**/*.js',
		dest: '/dist/'
	},
	styles: {
		src: '/css/**/*.css',
		dest: './dist/'
	},
	html: {
		src: './views/**/*.html',
		dest: '/dist/views'
	},
	libs: {
		src: './libs/**/*',
		dest: './dist/libs/',
	},
	assets: {
		src: './assets/**/*',
		dest: './dist/assets/',
	}
};

function js() {
	return gulp.src(paths.scripts.src)
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(paths.scripts.dest));
}

function lint() {
	return gulp.src(paths.scripts.src)
		.pipe(jshint())
		.pipe(jshint.reporter('default', {verbose: true}));
}

function cssmin() {
	return gulp.src(paths.styles.src)
		.pipe(cleanCSS({compatability: 'ie8'}))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(paths.styles.dest));
}

function htmlminviews() {
	return gulp.src(paths.html.src)
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest(paths.html.dest));
}

function html_replace() {
	return gulp.src('./index.html')
		.pipe(htmlreplace({
			'css': 'style.min.css',
			'js': 'app.min.js'
		}))
		.pipe(gulp.dest('./dist/'));
}

function libs() {
	return gulp.src(paths.libs.src)
		.pipe(gulp.dest(paths.libs.dest));
}

function assets() {
	return gulp.src(paths.assets.src)
		.pipe(gulp.dest(paths.assets.dest));
}

const build = gulp.series(gulp.parallel(cssmin, js), html_replace, htmlminviews, gulp.parallel(libs, assets));

exports.default =  build;
