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
    .catch(console.log(err))
));

app.post('/api/login', jsonParser, (req, res) => {

    const {
        provider,
        // program, 
        login,
        password
    } = req.body;
    
    fetch(`${process.env.APIENDPOINT}account/check/package`, {
        method: 'POST',
        headers: {
            'X-Authentication': process.env.AUTHENTICATION
        },
        body: JSON.stringify({
            "package": [
              {
                "provider": provider,
                "login": login,
                "login2": 'program',
                "password": password,
                "userId": "1",
                "priority": 9
              }
            ]
          })
    })
    .then(response => response.json())
    .then(data => res.send(data))
    .catch(err => console.log(err)) 
});

app.get('/api/login/:id', (req, res) => {
    fetch(`${process.env.APIENDPOINT}account/check/${req.params.id}`, headerOptions)
    .then(response => response.json())
    .then(data => res.send(data))
    .catch(err => console.log(err))
});


app.listen(PORT, () => {
    console.log(`listening on PORT:${PORT}`)
});