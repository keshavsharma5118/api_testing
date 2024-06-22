const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.post('/calculate-square', (req, res) => {
    const number = parseFloat(req.body.number);
    const square = number * number;
    res.json({ square: square });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
