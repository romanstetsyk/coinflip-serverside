const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');


const server = http.createServer((req,res) => {
    const pathname = req.url;
    console.log(pathname);

    const loadFile = (pathToFile, contType) => {
        fs.readFile(path.join(__dirname, 'public', pathToFile), (err, data) => {
            if (contType) {
                res.writeHead(200, {'Content-Type': contType});
            }
            res.write(data);
            res.end();
        });
    }

    switch(pathname) {
        case '/':
            loadFile('index.html', 'text/html');
            break;
        case '/css/main.css':
        case '/images/tails.jpeg':
        case '/images/heads.jpeg':
            loadFile(pathname);
            break;
        case '/js/main.js':
            loadFile(pathname, 'text/javascript');
            break;
        case '/flip':
            const flipResult = Math.floor(Math.random() * 2);
            const obj = {
                flipResult // shorthand notation for flipResult:flipResult
            }
            res.end(JSON.stringify(obj)); // this object can be accessed by fetch('/flip')
    }
})

server.listen(8000);