'use strict';

/*******************************
 * Task: Update neat package
 *******************************/
$.gulp.task( 'updateNeat', function() {
  return $.updateBowerPlugin(
      './bower_components/neat/core/**/*',
      $.config.paths.scssVendor + '/neat'
  );
});