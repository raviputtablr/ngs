/** buffer creation and reading */
// const buf = new Buffer('Hello');
// console.log('buffer length - ', buf.length );
// console.log('buffer - ', buf );
// console.log('buffer string - ', buf.toString() );
// console.log('buffer json - ', buf.toJSON() );


/** buffer write example */
const writeBuf = new Buffer(10);
writeBuf.write('Hey..! this is new');
console.log('buffer2 length - ', writeBuf.length );
console.log('buffer2 - ', writeBuf );
// console.log('buffer2 string - ', writeBuf.toString() );
// console.log('buffer2 json - ', writeBuf.toJSON() );


