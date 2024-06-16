import express from 'express';
import path from 'path';

const app = express();
const port = 8080;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.resolve('public/about.html'));
});

app.get('/contact-me', (req, res) => {
  res.sendFile(path.resolve('public/contact-me.html'));
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.resolve('public/404.html'));
});

app.listen(port);
