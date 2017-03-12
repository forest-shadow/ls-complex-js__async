'use strict';

/*******************************
 * Task: Images Spritesmith
 *******************************/
module.exports = function() {
  $.gulp.task( 'images:spritesmith', function() {
    var spriteData =
        $.gulp.src( './src/images/icons/**/*.*' )
            .pipe( $.spritesmith({
              imgName: 'sprite.png',
              imgPath: 'images/sprite.png',
              cssName: '_sprites.scss',
              cssFormat: 'scss',
              algorithm: 'binary-tree',
              padding: 10,
              cssVarMap: function( sprite ) {
                sprite.name = 's-' + sprite.name
              }
            }) );

    spriteData.img
        .pipe( $.buffer() )
        .pipe( $.gp.imagemin( { progressive: true } ).on( 'error', function(e) {
          console.log(e);
        }) )
        .pipe( $.gulp.dest( './dist/images' ) );

    spriteData.css.pipe( $.gulp.dest( './dev/scss/' ) );

    return $.gulp.src( './dev/images/icons/**/*' )
        .pipe( $.buffer() )
        .pipe( $.gp.imagemin({ progressive: true }) )
        .pipe( $.gulp.dest( './dist/images/icons' ) );
  });
};


