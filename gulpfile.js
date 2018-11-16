

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
    
	
	
	gulp.task("style", function(){
        gulp.src("sass/styles.scss")
			.pipe(plumber())
            .pipe(sass())
			.pipe(postcss([autoprefixer]))
            .pipe(gulp.dest("css"))
			.pipe(server.stream());
    });

	gulp.task("server", ["style"], function(){
		server.init({
			server: true,
			notify: false,
			open: true,
			cors: true,
			ui: {
				port: 8000
			}
		});
	
	gulp.watch("sass/**/*.{scss,sass}", ["style"]);
	gulp.watch("*.html", server.reload);
	gulp.watch("js/*.js", server.reload);
	});
	
	gulp.task('default', ['server']);