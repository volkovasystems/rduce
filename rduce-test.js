
const assert = require( "assert" );

const rduce = require( "./rduce.js" );

assert.equal( rduce( [ 1, 2, 3 ], ( sum, value ) => ( sum + value ) ), 6, "should be equal" );

assert.equal( rduce( [ 1, 2, 3 ], ( sum, value ) => ( sum + value ), 6 ), 12, "should be equal" );

console.log( "ok" );
