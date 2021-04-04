var interval = setInterval(function(name){
    console.log('Hello ' + name);
}, 3000, 'Rafael');

setTimeout(function(interval){
    clearInterval(interval);
    console.log('cleared timer');
}, 3000, interval);

console.log('waiting on first interval');