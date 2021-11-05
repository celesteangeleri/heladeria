const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const json = require('./saboresFijos.json');

app.use(cors());

app.get('/', (req, res) => {
    console.info(json);
    res.send(json);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});