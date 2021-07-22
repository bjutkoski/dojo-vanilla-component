const express = require('express');
const body = require("body-parser");
const router = require("./gateways/http/router");
const app = express();
const port = 3000;

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})