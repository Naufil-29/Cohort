const fs = require('fs');

function main (fileName){ 
    console.log(process.argv)
    let words = 0;
    fs.readFile(fileName, "utf-8", function(err, data){ 
        for(let i = 0; i < data.length; i++){ 
            if(data[i] === " "){ 
                words++;
            };
        };
        console.log(words + 1);
    });
}

main(process.argv[2])

// don't need to give full path just give the file name of file .