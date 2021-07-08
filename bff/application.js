const express = require('express');
const fs = require('fs');
const mustache = require('mustache');
const app = express();
const port = 3000;



app.get('/', (req, res) => {
    const template = fs.readFileSync(`${__dirname}/views/dojo.mustache`, 'utf-8');
    res.send(mustache.render(template));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})