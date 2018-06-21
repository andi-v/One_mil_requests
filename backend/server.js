const http = require('http');
const fs = require('fs');
const path = require('path');

let start, end, duration,
    reqNumber = 0;

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
        // initialize start time only when 1st req was made
        reqNumber++;
        if (reqNumber == 1) {
            start = new Date().getTime();
        }
        
        // ####################### ASYNC 4.0 / 5.0 #######################
        // fs.readFile(projectPath + "\\frontend\\test.txt", (err, data) => {
        //     end = new Date().getTime();
        //     duration = (end - start)/1000;
        //     res.writeHead(200, {'Content-type': 'text/plain'});
        //     res.write(duration.toString());
        //     res.end();
        // });

        // ####################### SYNC 4.5 / 6.7 #######################
        fs.readFileSync(projectPath + "\\frontend\\test.txt");
        end = new Date().getTime();
        duration = (end - start)/1000;
        res.writeHead(200, {'Content-type': 'text/plain'});
        res.write(duration.toString());
        res.end();
    };
}).listen(8080);