const fs = require('fs');
const showdown  = require('showdown');
const file = fs.createReadStream('Test.md', 'utf8'); 
const converter = new showdown.Converter();
file.on("data", (text) => {
    var html= converter.makeHtml(text);
    var newfile = fs.createWriteStream('output.html');
    newfile.write(html);
    newfile.close();
    console.log("file Converted");
})
