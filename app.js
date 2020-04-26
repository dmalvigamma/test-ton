const express = require('express');
const app = express();
const port = 3001;
const os =require('os')

__dirname + 

app.get('/', (req, res) => {
    res.sendFile("index.html", {root : __dirname});
    //res.send("<html>Hello World !! This is ton site edited with ton dns hello.temp.ton hosted from  node server<html>\n");
})

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
})
