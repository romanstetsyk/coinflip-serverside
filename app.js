const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');


const server = http.createServer((req,res) => {
    const pathname = req.url;
    console.log(pathname);

    const loadFile = pathToFile => {
        fs.readFile(path.join(__dirname, 'public', pathToFile), (err, data) => {
            res.write(data);
            res.end();
        });
    }

    switch(pathname) {
        case '/':
            fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
            })
            break;
        case '/css/main.css':
        case '/images/tails.jpeg':
        case '/images/heads.jpeg':
            loadFile(pathname);
            break;
    }
})

server.listen(8000);