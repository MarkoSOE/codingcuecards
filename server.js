const express = require('express');
const MongoClient = require('mongodb').MongoClient
const app = express();
const PORT = 3001;
const CONNECTIONSTRING = "mongodb+srv://cuecard:cuecard@cluster0.n5vdy.mongodb.net/?retryWrites=true&w=majority"

app.set('views', __dirname + '/views/')
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.static(__dirname + '/public'))


MongoClient.connect(CONNECTIONSTRING, {useUnifiedTopology : true})
    .then(client => {
        console.log('Connected to database')
        const db = client.db('cuecard')
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    })
    .catch(error => console.error(error))


// app.get('/', (request,response) => {
//     response.sendFile(__dirname + 'index.html')
// })