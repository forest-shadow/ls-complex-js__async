'use strict';

/*******************************
 * Task: Update bourbon package
 *******************************/
$.gulp.task( 'update:bourbon', function() {
  return $.updateBowerPlugin(
      './bower_components/bourbon/app/assets/stylesheets/**/*',
      $.config.paths.scssVendor + '/bourbon'
  );
});