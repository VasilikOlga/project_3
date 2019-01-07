var gulp = require('gulp'),
  sass  = require('gulp-sass'),
  browserSync    =  require('browser-sync'),
  concat    =  require('gulp-concat'),
  uglifyJs  =  require('gulp-uglifyjs'),
  cssNano    =  require('gulp-cssnano'),
  rename    =  require('gulp-rename'),
  autoprefixer  =  require('gulp-autoprefixer'),
  del      =  require('del');

gulp.task('sass', function() {
  return gulp.src('sass/**/*.scss')
  .pipe(sass())
  .pipe(autoprefixer([
  'last 10 versions'
  ], {
    cascade: true
  }))
  .pipe(gulp.dest('css'))
  .pipe(browserSync.reload({
    stream: true
  }));
});

gulp.task('min-css', ['sass'] , function() {
  return gulp.src('css/*.css')
  .pipe(cssNano())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('css'));
});

gulp.task('min-js', function() {
  return gulp.src([
    'libs/jquery/dist/jquery.min.js',
    'libs/slick-carousel/dist/slick.min.js'
  ])
  .pipe(concat('libs.min.js'))
  .pipe(uglifyJs())
  .pipe(gulp.dest('js'));
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch('js/**/*.js', browserSync.reload);
  gulp.watch('**/*.html', browserSync.reload);
});

gulp.task('clean', function() {
  return del.sync('dist');
});

gulp.task('build', ['clean', 'min-css', 'min-js'], function() {
  var buildCss = gulp.src([
    'css/libs.min.css',
    'css/main.css'
  ])
  .pipe(gulp.dest('dist/css'));

  var buildFonts = gulp.src('fonts/**/*')
  .pipe(gulp.dest('dist/fonts'));

  var buildJs = gulp.src('js/**/*')
  .pipe(gulp.dest('dist/js'));

  var buildHtml = gulp.src('*.html')
  .pipe(gulp.dest('dist'));
});