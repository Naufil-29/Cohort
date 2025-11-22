const fs = require('fs');

function writeNextFile(){ 
    fs.writeFile('a.txt', 'ending2 this file', 'utf-8', function(err, data){ 
        if(err){ 
            console.log(err)
        }
        else{ 
            console.log("added successfully");
        }
    });

    console.log("hello");
};

writeNextFile();

// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.