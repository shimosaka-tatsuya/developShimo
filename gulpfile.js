var fs = require('fs');
var gulp = require('gulp');
var browserSync = require('browser-sync');
var rename = require("gulp-rename");
var ejs = require("gulp-ejs");
var uglify = require('gulp-uglify');
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

// JSに関するタスク
gulp.task('build-js', function() {
    return gulp.src("_src/**/*.js")
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('_view/'));
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

// Static server
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./_view/"
        }
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});
 
gulp.task('watch', function () {
  gulp.watch(['./_src/**/*.ejs', './_src/**/*.css', './template/**/*.ejs', './template/**/*.css', './_src/**/*.+(jpg|jpeg|png|gif)', './_src/**/*.+(svg)', './**/*.js'], ['build-html', 'build-css', 'imagemin', 'svgmin', 'build-js']);
  gulp.watch(['./_view/**/*.ejs', './_view/**/*.css'], ['bs-reload']);
});
 
gulp.task('default', ['browser-sync', 'bs-reload', 'watch', 'build-html', 'build-css', 'imagemin', 'svgmin', 'build-js']);