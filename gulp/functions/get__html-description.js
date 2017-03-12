'use strict';

/*******************************
 * Get dictionary.json with html pages description
 *******************************/
var getDesc = function( txt ) {
  var dict, key, value;

  dict = $.fs.readFileSync( './dictionary.json', 'utf-8' );
  dict = JSON.parse( dict );

  for ( key in dict ) {
    value = dict[ key ];
    if ( key === txt ) {
      return value;
    }
  }

  return txt;
};

module.exports = getDesc;