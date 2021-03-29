var eventEmitter = require('events').EventEmitter; //criando instanncia do eventEmitter
var counter = 0;

var em = new eventEmitter();

setInterval(function() { em.emit('timed', counter++); }, 3000); //evento sendo disparado pela funcao em.emit

em.on('timed', function(data) { //funcao em.on processando evento disparado pela funcao em.emit
    console.log('timed ' + data);
});