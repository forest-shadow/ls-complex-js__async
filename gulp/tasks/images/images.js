'use strict';

/*******************************
 * Task: Move Images
 *******************************/
module.exports = function() {
  $.gulp.task( 'images', function() {
    return $.gulp.src( './src/images/*' )
        .pipe( $.gp.imagemin() )
        .pipe( $.gulp.dest( $.config.dist + '/images' ) );
  });
};