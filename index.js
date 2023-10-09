const express = require('express');
const app = express();
const allData = require('./data.json');

// cors state for cross origin request service. its create relationship between backend and fontend 
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/data', (req, res) => {
    res.send(allData);
})
app.get('/data/:id', (req, res) => {
    const id = req.params.id;
    const findPhone = allData.find(data => data.id == id) || {};
    res.send(findPhone);
})

app.listen(5000, () => {
    console.log('Server running at port 5000');
})