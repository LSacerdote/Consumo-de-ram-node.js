const http = require('http');    
const host= 'http://localhost';
const port = 3000;
const os = require('node:os'); 
const stats = require(`./pcRamUsage`);

http.createServer((req,res ) =>{
    let url = req.url;
    if(url === '/stats') { res.end(JSON.stringify(stats, null, 2))} else {
        res.end('<h1>Seja Bem-vindo</h1>');
    }
    
}).listen(3000, () => console.log(`Server is running ${host}:${port}`));    