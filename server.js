const express = require('express');
const app = express();
const port = 3000;

let queue = [];
let currentNumber = 0;

app.use(express.static('public'));
app.use(express.json());

app.post('/take-number', (req, res) => {
    const number = queue.length + 1;
    queue.push({ number, status: 'waiting' });
    res.json({ number, waitTime: `${queue.length * 5} minutes` });
});

app.post('/call-next', (req, res) => {
    if (queue.length > 0) {
        const nextCustomer = queue.shift();
        res.json({ message: `Calling customer number ${nextCustomer.number}` });
    } else {
        res.json({ message: 'No customers in the queue.' });
    }
});

app.get('/queue', (req, res) => {
    res.json(queue);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
