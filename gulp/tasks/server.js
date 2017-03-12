'use strict';

/*******************************
 * Task: BrowserSync server init & dist files onchange reload
 *******************************/
module.exports = function() {
  $.gulp.task( 'server', function() {
    $.browserSync.init( {
      open: "local",
      browser: "chrome",
      server: $.config.dist
    } );

    $.browserSync.watch( [ $.config.dist + '/**/*.*', '!**/*.css' ], $.browserSync.reload );
  });
};
