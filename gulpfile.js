var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function () {
	browserSync.init({
		server: {
			baseDir: './app'
		}
	});

	gulp.watch("app/*.html").on('change', browserSync.reload);
});


gulp.task('default', ['browser-sync']);
