const http = require('http');
const fs = require('fs');
const fs2 = require('fs').promises;
const path = require('path');

let start, end, duration,
    reqNumber = 0;

http.createServer( async (req, res) => {
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
        for (let i=1; i <= 40; i++) {
            await fs2.readFile(projectPath + "\\frontend\\test.txt");
        }

        if (reqNumber == 10) {
            end = new Date().getTime();
            duration = (end - start)/1000;
            console.log(duration);
        }
        res.writeHead(200, {'Content-type': 'text/plain'});
        res.end();
        

        // ####################### SYNC 4.5 / 6.7 #######################
        // for (let i=1; i <= 40; i++) {
        //     fs.readFileSync(projectPath + "\\frontend\\test.txt");
        // }
        
        // if (reqNumber == 10) {
        //     end = new Date().getTime();
        //     duration = (end - start)/1000;
        //     console.log(duration);
        // }
        
        // res.writeHead(200, {'Content-type': 'text/plain'});
        // res.end();
    };
}).listen(8080);