'use strict';

/*******************************
 * Task: Move Fonts
 *******************************/
module.exports = function() {
  $.gulp.task( 'fonts', function() {
    return $.gulp.src( './src/fonts/**/*' )
        .pipe( $.gulp.dest( $.config.dist + '/fonts' ) );
  });
};