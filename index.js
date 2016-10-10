#!/usr/bin/env node
 // "#!/" (known as shebang) - used to specify what is supposed to interpret the file
// In this case it looks up the path to the "node interpreter" via the "env" command

// Require set of core modules to use
const fs = require('fs'); // fs is a module for the file system, letting us read or write files (and more!) on a computer
const path = require('path'); // path is a utility for working with file paths (locations)
const exec = require('child_process').exec; // child_process allows us to run another process, outside of the one we're already in. Using the exec part of it allows us to specifically run a shell (command line) process


//__dirname to get the location of the module on the computer and path.join to add boilerplate.html to it
// once complete will call the callback funtion "read"
fs.readFile(path.join(__dirname, 'boilerplate.html'), function read(err, data) {
    if (err) return console.log(err); // if an error we print it out and stop running
    var command = "echo '" + data.toString() + "' | pbcopy"; // creating our command, passing the boilerplate string through the shell pipe directive "|" to the copy command for mac "pbcopy"
    exec(command, function clipboarded(err, stdout, stdrr) { // executes a new independent shell process, to which we pass our shell command
        if (err) return console.log(err); // if an error we print it out and stop running
        console.log("Copied!"); // Prints "Copied!" Indicating command was successful
    });
});
