var gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    cssdeclsort = require('css-declaration-sorter'),
    autoprefixer = require('autoprefixer'),
    packageImporter = require('node-sass-package-importer');

gulp.task('sass', () => {
  return gulp.src('./src/scss/*.+(scss)')
    .pipe(sass({importer: packageImporter({extensions: ['.scss', '.css']})}))
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(postcss([autoprefixer({grid: true,cascade: false})]))
    .pipe(postcss([cssdeclsort({order: 'smacss'})]))
    .pipe(gulp.dest('./static/assets/css/'));
});

gulp.task('watch', gulp.series( gulp.parallel('sass'), () => {
  var watcher = gulp.watch('./src/scss/**/*.+(scss)', gulp.task('sass'));
  watcher.on('change', function(event) {});
}));
