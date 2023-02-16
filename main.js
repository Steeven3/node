var fs = require("fs");

fs.readFile('welcome.txt',function(err,data){
    if(err){
        return console.error(err);
    }
    console.log("Asynchronous read:"+data.toString());
});

// Synchronous read
var data = fs.readFileSync('welcome.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");