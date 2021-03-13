"use strict";

let buf = new Buffer.from('This is my example');
let json = JSON.stringify(buf);

console.log(json);

//buff to json
let buf2 = new Buffer.from(JSON.parse(json).data);

//buff to string
console.log(buf2.toString());