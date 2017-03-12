'use strict';

/*******************************
 * Task: Move Images Mockups
 *******************************/
module.exports = function() {
  $.gulp.task( 'images:mockups', function() {
    return $.gulp.src( './src/images/mockups/**/*' )
        .pipe( $.gp.imagemin() )
        .pipe( $.gulp.dest( $.config.dist + '/images/mockups' ) );
  });
};