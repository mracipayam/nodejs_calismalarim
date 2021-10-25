const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt',{encoding:'utf-8'});
const writeStream= fs.createWriteStream('./docs/blog4.txt');

/*
//Event Listener
readStream.on('data',(chunk)=>{
    console.log('---------New Chunk-------------')
    console.log(chunk);
    writeStream.write('\nNEW CHUNK\n');
    writeStream.write(chunk);
});
*/

//piping
readStream.pipe(writeStream);
