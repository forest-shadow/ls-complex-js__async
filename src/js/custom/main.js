const hw1 = require( './hw1.js' );
hw1.timer(3000).then( (fullfilledTime) => console.log(`I fires after ${fullfilledTime/1000} seconds`) );