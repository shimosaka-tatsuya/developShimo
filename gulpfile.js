var gulp = require('gulp');

gulp.task('build', function () {
	var postcss = require('gulp-postcss');
	var customProperties = require('postcss-custom-properties');
	var nested = require('postcss-nested');
	var Import = require('postcss-import');
	var autoprefixer = require('autoprefixer');
	var rename = require("gulp-rename");
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
	
	return gulp.src('./css/app.css')
		.pipe(postcss(preprocessors))
		.pipe(postcss(postprocessors))
		.pipe(rename('app.min.css'))
		.pipe(gulp.dest('./dist'));
});