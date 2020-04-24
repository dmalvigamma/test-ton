const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send("<html>Hello World !! This is ton site edited with ton dns hello.temp.ton hosted from  node server<html>\n");
})

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
})
