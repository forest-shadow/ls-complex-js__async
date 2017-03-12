'use strict';

/*******************************
 * Task: Move svg + svg spritesheet
 *******************************/
module.exports = function() {
  $.gulp.task('svg', function() {
    return $.gulp.src('./src/images/svg/*.svg')
        .pipe($.gp.svgmin({
          js2svg: {
            pretty: true
          }
        }))
        .pipe($.gp.cheerio({
          run: function ($) {
            $('[fill]').removeAttr('fill');
            $('[stroke]').removeAttr('stroke');
            $('[style]').removeAttr('style');
          },
          parserOptions: { xmlMode: true }
        }))
        .pipe($.gp.replace('&gt;', '>'))
        .pipe($.gp.svgSprite({
          mode: {
            symbol: {
              sprite: "../sprite.svg"
            }
          }
        }))
        .pipe($.gulp.dest($.config.dist + '/images/svg'))
  })
};