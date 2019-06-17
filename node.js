const fs= require('fs');
 const endOfLine= require('os').EOL;
 const http =require('http');
 
 const cmd = process.argv[2];
 const code = process.argv[3] + endOfLine;
 const message='index.js';

    
// creat
 if ( cmd === "file"){
fs.writeFile ( message, code, (err)=>{
  if( err ) throw err;
console.log('run file index.js with the world "my new project!" ')
});
 }
// read with: help
 else if (cmd ==="help"){
   http.createServer((req,res)=>{
  fs.readFile(message,"utf8",(err, movie)=>{
    if(err) throw err;
    res.writeHead(200, {'content-type': 'text/js'});
    res.write(movie);
    res.end();
console.log(movie);
  });
 }).listen(8080);
}
// list

else if(cmd ==='list'){
  const book = ['dictonnairy','mathematique','biology','power of love']

 fs.appendFile(message,book,"utf8",(err)=>{
     if(err)throw err;
  console.log(book);
   });
}
// add
else if(cmd==='add'){
  const book = ['dictonnairy','mathematique','biology','power of love',];
fs.appendFile(message,"buy groceries",(err)=>{
  if(err)throw err;
  book.push('buy groceries');
  console.log(book)
});
}
// remove
 else if(cmd=== "remove2"){
  const book = ['dictonnairy','mathematique','biology','power of love',];

   fs.writeFile(message, book, (err)=>{
     if(err) throw err;
     book.splice(1,2);
     console.log(book);
   });
  }
  // remove all 
  else if (cmd === "reset"){
    fs.writeFile(message,"", (err)=>{
      if(err) throw err;
    });
  }
