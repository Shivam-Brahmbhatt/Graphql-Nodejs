const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/glg-ninja')
mongoose.connection.once('open', () => {
    console.log('connection to database');
})


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(3000, () => {
    console.log('Server listening on port 3000');
})