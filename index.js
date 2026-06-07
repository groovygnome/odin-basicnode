import http from 'node:http';
import fs from 'node:fs';

const server = http.createServer((req, res) => {
    let currURL = req.url;
    let file =
        currURL === '/' ? './index.html' :
            currURL === '/about' ? './about.html' :
                currURL === '/contact-me' ? './contact-me.html' :
                    './404.html';
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            return res.end('Server error');
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
});

server.listen(8000);
