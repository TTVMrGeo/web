const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname)));

app.get('/hands.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'hands.json'));
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
