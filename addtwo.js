var base = 2;

exports.addtwo = function(input){
 return parseInt(input) + base;
}

console.log(this.addtwo(10));
console.log(global);