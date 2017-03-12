'use strict';


/*******************************
 * Task: Pug
 *******************************/
module.exports = function() {
  $.gulp.task( 'pug', function() {
    if ( $.fs.existsSync( './dist/' ) ) {
      var dirs = $.fs.readdirSync( './dist/' );
      var files = [];
      for (var i = 0, len = dirs.length; i < len; i++) {
        var file = dirs[i];
        if (file.indexOf('.html') + 1 && !( file.indexOf('index') + 1)) {
          files.push({
            file: file.replace('.html', ''),
            name: $.getDesc(file)
          });
        }
      }
    }

    return $.gulp.src('./src/pug/*.pug')
        .pipe( $.gp.pug( {
          pretty: true,
          locals: {'pages': files}
        } ))
        .on('error', $.gp.notify.onError( function(error) {
          return {
            title: 'Pug',
            message:  error.message
          }
        }))
        .pipe( $.gulp.dest( $.config.dist ) );
  });
};

