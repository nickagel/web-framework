var gulp = require('gulp');
var concat = require('gulp-concat')
var htmlmin = require('gulp-htmlmin');

gulp.task('html', function () {
    return gulp.src(["bin/top.php", "bin/nav.php", "content/*", "bin/bottom.php"])
        .pipe(concat("index.php"))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest("site_build/"));
})

gulp.task('templates', function () {
    return gulp.src(["templates/*"])
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest("site_build/templates"));
})