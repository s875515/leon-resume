var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    // uglify = require('gulp-uglify'),
    // rename = require('gulp-rename'),
    // concat = require('gulp-concat'),
    notify = require('gulp-notify');
    // compass = require('gulp-compass');

gulp.task('server', function () {
  connect.server({
    livereload: true
  });
});

gulp.task('sass', function () {
  gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('build/css'))
    .pipe(connect.reload());
});

// gulp.task('compass',function(){
//    gulp.src('scss/*.scss')
//       .pipe(compass({
//           config_file: './config.rb',
//           sourcemap: true,
//           time: true,
//     css: './style/css/',
//     sass: './style/scss/',
//     style: 'compact' //nested, expanded, compact, compressed
//       }))
//       .pipe(gulp.dest('build/css'))
//       // .pipe(connect.reload());
// });

gulp.task('scripts', function () {
  gulp.src('javascript/*.js')
    // .pipe(concat('main.js'))
    .pipe(gulp.dest('build/js'))
    // .pipe(rename({ suffix: '.min' }))
    // .pipe(uglify())
    // .pipe(gulp.dest('build/js'))
    .pipe(notify({ message: 'Scripts task complete' }))
    .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src('views/*.html')
    .pipe(gulp.dest('build/views'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('scss/partials/*.scss', ['sass']);
  gulp.watch('javascript/*.js', ['scripts']);
  gulp.watch('views/*.html', ['html']);
  gulp.watch('index.html', ['html']);
});

gulp.task('default', ['sass', 'server', 'watch', 'scripts', 'html']);

// var gulp = require('gulp'),
//     uglify = require('gulp-uglify'),
//     rename = require('gulp-rename'),
//     clean = require('gulp-clean'),
//     concat = require('gulp-concat'),
//     notify = require('gulp-notify');

// gulp.task('scripts', function () {
//     return gulp.src('src/scripts/**/*.js')
//       .pipe(concat('main.js'))
//       .pipe(gulp.dest('dist/assets/js'))
//       .pipe(rename({ suffix: '.min' }))
//       .pipe(uglify())
//       .pipe(gulp.dest('dist/assets/js'))
//       .pipe(notify({ message: 'Scripts task complete' }));
// });

// gulp.task('clean', function () {
//     return gulp.src(['dist/assets/css', 'dist/assets/js', 'dist/assets/img'], { read: false })
//       .pipe(clean());
// });

// // 預設任務
// gulp.task('default', ['clean'], function () {
//     gulp.start('scripts');
// });
