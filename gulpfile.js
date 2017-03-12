'use strict';

global.$ = {
  package: require( './package.json' ),
  config: require( './gulp/config' ),
  path: {
     task: require( './gulp/paths/tasks.js' )
  },
  browserSync: require( 'browser-sync' ).create(),
  buffer: require( 'vinyl-buffer' ),
  fs: require( 'fs' ),
  getDesc: require( './gulp/functions/get__html-description' ),
  gp: require( 'gulp-load-plugins' )(),
  gulp: require( 'gulp' ),
  rimraf: require( 'rimraf' ),
  spritesmith: require( 'gulp.spritesmith' ),
  streamqueue: require( 'streamqueue' ),
  mainBowerFiles: require( 'main-bower-files' ),
  updateBowerPlugin: (bowerPath, vendorPath) => {
    return $.gulp.src( bowerPath )
        .pipe( $.gulp.dest( vendorPath ) )
  }
};



$.path.task.forEach( function( taskPath ) {
  require( taskPath )();
});


$.gulp.task('watch', function() {
  $.gulp.watch('./src/js/**/*.js', $.gulp.series('js'));
  $.gulp.watch('./src/scss/**/*.scss', $.gulp.series('sass'));
  $.gulp.watch('./src/pug/**/*.pug', $.gulp.series('pug'));
  $.gulp.watch('./src/images/**/*.*', $.gulp.series('images', 'images:mockups', 'images:vendor', 'images:spritesmith'));
});

$.gulp.task( 'default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass',
    'pug',
    'js',
    'fonts',
    'images',
    'images:mockups',
    'images:vendor',
    'images:spritesmith',
    'svg'
  ),
  $.gulp.parallel(
    'watch',
    'server'
  )
));
