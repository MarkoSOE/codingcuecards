const express = require('express');
const MongoClient = require('mongodb').MongoClient
const app = express();
const PORT = 3001;
require('dotenv').config()

let dbName = 'cuecard'
let dbConnectionString = process.env.DB_STRING

app.set('views', __dirname + '/views/')
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.static(__dirname + '/public'))


MongoClient.connect(dbConnectionString, {useUnifiedTopology : true})
    .then(client => {
        console.log('Connected to database')
        const db = client.db(dbName)
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    })
    .catch(error => console.error(error))


// app.get('/', (request,response) => {
//     response.sendFile(__dirname + 'index.html')
// })