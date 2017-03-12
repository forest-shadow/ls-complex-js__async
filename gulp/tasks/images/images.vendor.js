'use strict';

/*******************************
 * Task: Move Images Vendor
 *******************************/
module.exports = function() {
  $.gulp.task( 'images:vendor', function() {
    return $.gulp.src( './src/images/vendor/**/*' )
        .pipe( $.gp.imagemin() )
        .pipe( $.gulp.dest( $.config.dist + '/images/vendor' ) );
  });
};