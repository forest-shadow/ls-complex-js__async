'use strict';

/*******************************
 * Task: Update normalize.scss
 *******************************/
$.gulp.task( 'updateNormalize', function() {
  return $.gulp.src( './bower_components/normalize-scss/_normalize.scss' )
      .pipe( $.gulp.dest( $.config.paths.scssVendor + '/' ) )
});