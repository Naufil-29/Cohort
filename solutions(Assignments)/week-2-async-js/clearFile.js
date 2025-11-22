const fs = require('fs');

function removeExtraSpace(text){ 
    let cleanedText = text.replace(/\s+/g, ' ');
    cleanedText = cleanedText.trim();
    console.log(cleanedText)
}

function removeSpaces(){ 
   let output =  fs.readFile('a.txt', 'utf-8', function(err, data){ 
        if(err){ 
            console.log(err);
            return
        }

        let originalText = data;
        removeExtraSpace(originalText)
        
    });
};

removeSpaces();
































// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman