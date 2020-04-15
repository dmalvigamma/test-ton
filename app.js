const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.html('HELLLO WORLDD!!, Response from node server !!');
})

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
})
