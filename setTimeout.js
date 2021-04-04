setTimeout(function(name){
    console.log('Hello ' + name);
}, 3000, 'Rafael');

console.log('Waiting on timer');

//exemplo de cancelamento de temporazicao

var timer1 = setTimeout(function(name){
    console.log('Hello ' + name);
}, 3000, 'Rafael');

console.log('Waiting on timer');

setTimeout(function(timer){
    clearTimeout(timer);
    console.log('cleared timer');
}, 3000, timer1);
