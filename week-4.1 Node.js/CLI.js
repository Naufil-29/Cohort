const fs = require('fs');
const {Command} = require('commander');
const program = new Command();

program
.name('count')
.description('CLI to do file based task')
.version('0.8.0');

program.command('count_sentences')
.description('Count the number of sentences in a file')
.argument('<file>', 'file to count the number of sentences')
.action((file) => { 
    fs.readFile(file, "utf8", (err, data) => { 
        let sentence = 0;
        if(err){ 
            console.log(err)
        }
        else{ 
            
        for(let i = 0; i < data.length; i++){ 
            if(data[i] === "."){ 
                sentence++;
            };
        };
        };
        console.log(`there are ${sentence} sentences in ${file}`)
    });
});

program.parse();