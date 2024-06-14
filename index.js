import http from 'http';
import fs from 'fs';

http
  .createServer((req, res) => {
    const reqURL = new URL(req.url, `http://${req.headers.host}`);
    if (reqURL.pathname === '/') {
      fs.readFile('index.html', (error, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
      });
    } else if (reqURL.pathname === '/about') {
      fs.readFile('about.html', (error, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
      });
    } else if (reqURL.pathname === '/contact-me') {
      fs.readFile('contact-me.html', (error, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
      });
    } else {
      fs.readFile('404.html', (error, data) => {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
      });
    }
  })
  .listen(8080);
