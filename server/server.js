const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/manabu/api/v1/course', function (req, res) {
    return res.json({data:[{id:1, "name":"Complete React", "price":"200"}, {id:2, "name":"Node JS", "price":"50"}, {id:3, "name":"Master Javascript", "price":"150"}, {id:4, "name":"Angular", "price":"100"}]});
});

app.get('/manabu/api/v1/instructor', function (req, res) {
    return res.json({data:[{id:1, "name":"Stephen"}, {id:2, "name":"Techsith"},{id:3, "name":"Maximilian"},{id:4, "name":"Jonas"}]});
});

//Used to register user.
app.post('/manabu/api/v1/user', function (req, res) {
    return res.json({data:[{"name":"react", "price":"100"}, {"name":"node", "price":"50"}]});
});


app.post('/manabu/api/v1/message', function (req, res) {
    return res.json({data:[{"name":"react", "price":"100"}, {"name":"node", "price":"50"}]});
});


app.post('/manabu/api/v1/checkout', function (req, res) {
    return res.json({data:[{"name":"react", "price":"100"}, {"name":"node", "price":"50"}]});
});


// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

app.listen(process.env.PORT || 8000);