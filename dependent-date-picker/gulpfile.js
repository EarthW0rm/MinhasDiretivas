var gulp = require('gulp');
browserSync = require('browser-sync');
 
// Basic usage
gulp.task('scripts', function() {

    browserSync.init({
        server: {
            baseDir: './'
        }
    })

    gulp.watch(['index.html', 'app.js']).on('change', browserSync.reload)

});