'use strict';

/*******************************
 * Task: Update bitters package
 *******************************/
$.gulp.task( 'updateBitters', function() {
  return $.updateBowerPlugin(
      './bower_components/bitters/core/**',
      $.config.paths.scssVendor + '/bitters/'
  );
});