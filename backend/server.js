const http = require('http');
const fs = require('fs');
var path = require('path');

http.createServer( (req, res) => {
    const projectPath = path.join(__dirname, '..');

    if ((req.method == 'GET') && (req.url.indexOf("oneMilReq.html") != -1)) {
        fs.readFile(projectPath + "\\frontend\\oneMilReq.html", (err, data) => {
            res.writeHead(200, {'Content-type': 'text/html'});
            res.write(data);
            res.end();
        });
    };

    if ((req.method == 'GET') && (req.url.indexOf("main.css") != -1)) {
        fs.readFile(projectPath + "\\frontend\\main.css", (err, data) => {
            res.writeHead(200, {'Content-type': 'text/css'});
            res.write(data);
            res.end();
        });
    };

    if ((req.method == 'GET') && (req.url.indexOf("requester.js") != -1)) {
        fs.readFile(projectPath + "\\frontend\\requester.js", (err, data) => {
            res.writeHead(200, {'Content-type': 'application/javascript'});
            res.write(data);
            res.end();
        });
    };

    if (req.method == 'GET' && (req.url.indexOf("server.js") != -1)) {
        res.writeHead(200, {'Content-type': 'text/plain'});
        res.end();
    }
}).listen(8080);