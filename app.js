const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("<html>Hello World !! This is ton site hosted from  node server<html>\n");
})

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
})
