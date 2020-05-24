const express = require('express');
const cors = require('cors');
const knex = require('knex');
const bodyparser = require('body-parser');
const db= knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'timchung12700',
      password : '',
      database : 'typinggame'
    }
});

const app = express();
app.use(cors());
app.use(bodyparser.json());

app.post('/submit', (req, res) => {
    const { username, score, difficulty, date } = req.body;
    db('topscores')
        .returning('*')
        .insert({
            username: username,
            score: score,
            difficulty: difficulty,
            thedate: date
        })
        .then(topscores => {
            res.json(topscores[0])
        })
        .catch(err => {
            res.status(400).json('unable to submit');
        });
});


app.get('/', (req, res) => {
    db('topscores')
    .returning('*')
    .then(topscores => {
        res.send(topscores)
    })
})

app.listen(3000);
