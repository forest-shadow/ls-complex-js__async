'use strict';

/*******************************
 * Task: Javascript
 *******************************/
module.exports = function() {
  $.gulp.task( 'js', function() {
    return $.streamqueue( { objectMode: true },
        $.gulp.src( [ 'src/js/custom/main.js' ] )
            .pipe( $.gp.plumber({errorHandler: (err) => {
                $.gp.notify.onError({
                    title:    "Gulp",
                    subtitle: "Failure!",
                    message:  "Error: <%= error.message %>",
                    sound:    "Beep"
                })(err);

                this.emit('end');
            }}) )
            .pipe( $.gp.browserify() )
            .pipe( $.gp.babel({
                presets: ['es2015']
            }) )
            .pipe( $.gp.rename('all.js') )
            .pipe( $.gulp.dest('./dist') )
            .pipe( $.browserSync.stream() ));
  });
};