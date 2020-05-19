const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');


/*
  -- TOP LEVEL FUNCTIONS 
  gulp.task - Define tasks
  gulp.src - Point to files to use
  gulp.dest - Points to folder to output
  gulp.watch - Watch files and folders for changes
*/


gulp.task('message', function(){
    return console.log("Gulp is running...");
});

// copy all html Files
gulp.task("copyHtml", function(){
    gulp.src("src/*.html")
        .pipe(gulp.dest('dest'));
});

// optimize image with gulp-imagemin
// gulp.task("imageMin", function() {
// 	gulp.src('src/images/*')
// 		.pipe(imagemin())
// 		.pipe(gulp.dest('dest/images'))
// })
exports.imageMin = () => (
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dest/images'))
);

// minify js
// gulp.task('minifyJs', function() {
//     gulp.src("src/js/*.js")
//         .pipe(uglify())
//         .pipe(gulp.dest('dest/js'));
// });

//concat js
gulp.task('scripts', function(){
    gulp.src("src/js/*.js")
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dest/js'));
});

// compile sass
// gulp.task("sass",function() {
//     gulp.src("../sass/*.scss")
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest('dest/css'));
// });

gulp.task('sass', function() {
    gulp.src("../sass/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(gulp.dest('../css'));
  });

// all on gulp
gulp.task('default', ['message', 'copyHtml', 'imageMin', 'scripts', 'sass']);

// gulp watch
gulp.task('watch', function(){
    gulp.watch('src/js/*.js', ['scripts']);
    gulp.watch('src/images/*', ['imageMin']);
    gulp.watch('../sass/*.scss', ['sass']);
    gulp.watch('src/*.html', ['copyHtml']);
  });

