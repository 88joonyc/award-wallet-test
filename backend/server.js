require('dotenv').config()
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch')
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
const jsonParser = bodyParser.json();

const headerOptions = {
    method: 'GET',
    headers: {
        'X-Authentication': process.env.AUTHENTICATION
    }
};

app.get('/api', (req,res) => {
    fetch(`${process.env.APIENDPOINT}providers/list`, headerOptions)
    .then( res => res.json())
    .then( json => res.send(json))
    .catch(err => console.log(err))
});

app.get('/api/:code', (req, res) => (
    fetch(`${process.env.APIENDPOINT}providers/${req.params.code}`, headerOptions)
    .then( res => res.json())
    .then( json => res.send(json))
    .catch(conosle.log(err))
));

pp.post('/api/login', (req, res) => {
    jsonParser, {
        method: 'POST',
        headers: {
            'X-Authentication': process.env.AUTHENTICATION
        },
        body: {}
    } 

})


app.listen(PORT, () => {
    console.log(`listening on PORT:${PORT}`)
});