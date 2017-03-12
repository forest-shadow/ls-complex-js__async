'use strict';

/*******************************
 * Task: Sass
 *******************************/
module.exports = function() {
  $.gulp.task( 'sass', function() {
    return $.gulp.src('./src/scss/app.scss')
        .pipe( $.gp.sourcemaps.init() )
        .pipe( $.gp.sass()).on('error', $.gp.notify.onError({ title: 'Sass' }) )
        .pipe( $.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }) )
        .pipe( $.gp.rename( 'all.css' ) )
        .pipe( $.gp.sourcemaps.write( '.' ) )
        .pipe( $.gulp.dest( './dist/' ) )
        .pipe( $.browserSync.stream() );
  });
};