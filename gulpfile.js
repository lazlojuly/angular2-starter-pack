var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function () {
	browserSync.init({
		port: 3001,
		server: {
			index: 'index.html',
			baseDir: './app',
			routes: {
				'/node_modules': './node_modules'
			}
		},
	});

	gulp.watch("app/*.html").on('change', browserSync.reload);
});


gulp.task('default', ['browser-sync']);
