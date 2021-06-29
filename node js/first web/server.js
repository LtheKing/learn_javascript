const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.render('index', {
        name: 'aldinata'
    });
});
app.set('view engine', 'pug');
const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});