const express = require('express');
const fs = require('fs');
const mustache = require('mustache');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    const template = fs.readFileSync(`${__dirname}/views/base.mustache`, 'utf-8');
    const header = fs.readFileSync(`${__dirname}/views/header.mustache`, 'utf-8');
    const content = fs.readFileSync(`${__dirname}/views/home.mustache`, 'utf-8');
    const footer = fs.readFileSync(`${__dirname}/views/footer.mustache`, 'utf-8');
    const data = { name: 'Bruno', isPolite: false };
    const partials = {
      header,
      content,
      footer,
    }
    res.send(mustache.render(template, data, partials));
})

app.get('/contact', (req, res) => {
  const template = fs.readFileSync(`${__dirname}/views/base.mustache`, 'utf-8');
  const header = fs.readFileSync(`${__dirname}/views/header.mustache`, 'utf-8');
  const content = fs.readFileSync(`${__dirname}/views/contact.mustache`, 'utf-8');
  const footer = fs.readFileSync(`${__dirname}/views/footer.mustache`, 'utf-8');
  const data = { name: 'Bruno', isPolite: false };
  const partials = {
    header,
    content,
    footer,
  }
  res.send(mustache.render(template, data, partials));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})