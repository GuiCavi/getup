var gulp = require('gulp'),
		browserSync = require('browser-sync'),
		compass = require('gulp-compass'),
		plumber = require('gulp-plumber');

gulp.task('compass', function() {
	gulp.src('./assets/css/sass/*.sass')
	 		.pipe(plumber())
			.pipe(compass({
				config_file: './assets/css/config.rb',
				css: './assets/css/stylesheets',
				sass: './assets/css/sass'
			}))
			.pipe(gulp.dest('./assets/css/stylesheets'));
});

// Static server
gulp.task('browser-sync', function() {
  var config = {
    server: {
      baseDir: "./"
    },
    files: [
      "*.html",
      "./assets/css/stylesheets/*.css",
      "./assets/js/*.js"
    ],
    online: true,
    //host: "192.168.10.63"
  }

  browserSync(config, function(err, bs) {
    if (!err) {
      console.log("BrowserSync is ready!");
    }
  });
});

gulp.task('reload', function() {
  browserSync.reload();
});

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch('./assets/css/sass/**/*.{sass,scss}', ['compass']);
});

gulp.task('default', ['watch']);
