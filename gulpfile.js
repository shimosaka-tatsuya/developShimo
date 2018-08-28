var fs = require('fs');
var gulp = require('gulp');
var connect = require('gulp-connect');
var rename = require("gulp-rename");
var ejs = require("gulp-ejs");
var merge = require('merge-stream');
var data = require('gulp-data');

// htmlに関するタスク
gulp.task('build-html', function(){
	var buildView = gulp.src('./_src/**/*.ejs')
	.pipe(data(file => {
	return {
		filename: file.path,
		meta: require("./template/meta.json")
	}
	}))
	.pipe(ejs({
		fileKind: 'view'
	}))
	.pipe(rename({extname: '.html'}))
	.pipe(gulp.dest('./_view/'));
});

// cssに関するタスク
gulp.task('build-css', function () {
	var postcss = require('gulp-postcss');
	var customProperties = require('postcss-custom-properties');
	var nested = require('postcss-nested');
	var Import = require('postcss-import');
	var autoprefixer = require('autoprefixer');
	var cssnano = require('cssnano');
	
	var preprocessors = [
		Import,
		customProperties({preserve: false}),
		nested
	];
	
	var postprocessors = [
		autoprefixer,
		cssnano
	];
	
	return gulp.src(['./_src/**/*.css','!./_src/**/_*.css'])
		.pipe(postcss(preprocessors))
		.pipe(postcss(postprocessors))
		.pipe(rename({extname: '.min.css'}))
		.pipe(gulp.dest('./_view/'));
});

gulp.task('connect', function() {
  connect.server({
    root: './_view/',
    livereload: true
  });
});

gulp.task('reload', function () {
  gulp.src(['./_src/**/*.ejs', './_src/**/*.css'])
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(['./_src/**/*.ejs', './_src/**/*.css'], ['build-html', 'build-css']);  
});
 
gulp.task('default', ['connect', 'watch', 'reload', 'build-html', 'build-css']);