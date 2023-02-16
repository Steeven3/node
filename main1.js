var fs = require("fs");

fs.readFile('hello.txt',function(err,data){
    if(err){
        return console.error(err);
    }
    console.log("Asynchronous read:"+data.toString());
});

// Synchronous read
var data = fs.readFileSync('hello.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");