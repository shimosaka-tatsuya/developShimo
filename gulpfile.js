var fs = require('fs');
var gulp = require('gulp');
var connect = require('gulp-connect');
var rename = require("gulp-rename");
var ejs = require("gulp-ejs");
var merge = require('merge-stream');
var data = require('gulp-data');

var changed  = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var imageminJpg = require('imagemin-jpeg-recompress');
var imageminPng = require('imagemin-pngquant');
var imageminGif = require('imagemin-gifsicle');
var svgmin = require('gulp-svgmin');

// jpg,png,gif画像の圧縮タスク
gulp.task('imagemin', function(){
    var srcGlob = './_src/**/*.+(jpg|jpeg|png|gif)';
    var dstGlob = './_view/';
    gulp.src( srcGlob )
    .pipe(changed( dstGlob ))
    .pipe(imagemin([
        imageminPng(),
        imageminJpg(),
        imageminGif({
            interlaced: false,
            optimizationLevel: 3,
            colors:180
        })
    ]
    ))
    .pipe(gulp.dest( dstGlob ));
});
// svg画像の圧縮タスク
gulp.task('svgmin', function(){
    var srcGlob = './_src/**/*.+(svg)';
    var dstGlob = './_view/';
    gulp.src( srcGlob )
    .pipe(changed( dstGlob ))
    .pipe(svgmin())
    .pipe(gulp.dest( dstGlob ));
});

// htmlに関するタスク
gulp.task('build-html', function(){
	var buildView = gulp.src('./_src/**/*.ejs')
	.pipe(data(file => {
	return {
		filename: file.path,
		meta: require(("./" + file.path.slice(file.path.indexOf("_src")).slice("_src",file.path.lastIndexOf("/") - file.path.lastIndexOf("") + 1) + "/meta.json")), //各ejsテンプレートごとのjsonファイルを相対パスで読み込む
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
	
	return gulp.src(['./_src/**/*.css'])
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
  gulp.src(['./**/*.ejs', './**/*.css'])
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(['./_src/**/*.ejs', './_src/**/*.css', './template/**/*.ejs', './template/**/*.css', './_src/**/*.+(jpg|jpeg|png|gif)', './_src/**/*.+(svg)'], ['build-html', 'build-css', 'imagemin', 'svgmin']);
  gulp.watch(['./_view/**/*.ejs', './_view/**/*.css'], ['reload']);
});
 
gulp.task('default', ['connect', 'watch', 'reload', 'build-html', 'build-css', 'imagemin', 'svgmin']);