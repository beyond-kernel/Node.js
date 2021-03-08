process.stdin.setEncoding('utf8');

process.stdin.on('readable', function(){
    var input = process.stdin.read();

    if (input !== null) {
        
        var command = input.trim();   

        if (command == 'exit') 
            process.exit(0);

        process.stdout.write(input);
        
    }
});