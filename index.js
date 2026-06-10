const express = require('express');
const path = require('path');
const app = express();

//import http from 'node:http';
//import fs from 'node:fs';

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'about.html')));
app.get('/contact-me', (req, res) => res.sendFile(path.join(__dirname, 'contact-me.html')));
app.get(/.*/, (req, res) => res.sendFile(path.join(__dirname, '404.html')));


const PORT = 3000;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Servers uppppp listeninng on port ${PORT}`);
});

//const server = http.createServer((req, res) => {
//    let currURL = req.url;
//    let file =
//        currURL === '/' ? './index.html' :
//            currURL === '/about' ? './about.html' :
//                currURL === '/contact-me' ? './contact-me.html' :
//                    './404.html';
//    fs.readFile(file, 'utf8', (err, data) => {
//        if (err) {
//            console.error(err);
//            res.writeHead(500, { 'Content-Type': 'text/plain' });
//            return res.end('Server error');
//        }
//        res.writeHead(200, { 'Content-Type': 'text/html' });
//        res.end(data);
//    });
//});

//server.listen(8000);
