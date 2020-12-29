const cssnano = require('gulp-cssnano');
const del = require('del');
const gulp = require('gulp');
const gulpIf = require('gulp-if');
const htmlmin = require('gulp-htmlmin');
const server = require('gulp-webserver');
const uglify = require('gulp-uglify');
const useref = require('gulp-useref');

const paths = {
	html: {
		src: './views/**/*.html',
		dest: './dist/views/'
	},
	assets: {
		src: './assets/**/*',
		dest: './dist/assets/',
	}
};

function minimize() {
	return gulp.src('./index.html')
		.pipe(useref({
			assets(content, target) {
				return content.replace('assets', target);
			}
		}))
		.pipe(gulpIf('*.js', uglify()))
		.pipe(gulpIf('*.css', cssnano()))
		.pipe(gulp.dest('dist'));
}

function htmlminviews() {
	return gulp.src(paths.html.src)
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest((paths.html.dest)));
}

function assets() {
	return gulp.src(paths.assets.src)
		.pipe(gulp.dest(paths.assets.dest));
}

const build = gulp.series(minimize, htmlminviews, assets);

exports.default = build;

async function clean_del() {
	return del.sync('dist');
}

exports.clean_del = clean_del;

exports.server = function() {
	gulp.src('.')
	  .pipe(server({
		livereload: true,
		open: true,
		port: 8080
	  }));
  };

exports.min_server = gulp.series(build, () => {
gulp.src('dist')
	.pipe(server({
	livereload: true,
	open: true,
	port: 8081
	}));
});
