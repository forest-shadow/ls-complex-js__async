'use strict';

/*******************************
 * Task: Clean dist directory
 *******************************/
module.exports = function() {
  $.gulp.task( 'clean', function( cb ) {
    return $.rimraf( $.config.dist, cb );
  });
};
