const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.use('/static', express.static('static'));

const server = app.listen(3002, () => {
    const host = server
        .address()
        .address;
    const port = server
        .address()
        .port;

    console.log('Example app listening at http://%s:%s', host, port);
});