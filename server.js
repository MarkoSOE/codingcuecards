const express = require('express');
const MongoClient = require('mongodb').MongoClient
const app = express();
const PORT = 3001;
const dotenv = require('dotenv')
dotenv.config()

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'cuecard'

MongoClient.connect(dbConnectionStr, {useUnifiedTopology : true})
    .then(client => {
        console.log('Connected to database')
        db = client.db(dbName)
    })
    .catch(error => console.error(error))
    
app.set('views', __dirname + '/views/')
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.static(__dirname + '/public'))
    
app.get('/', (request, response) => {
    db.collection('cuecardquestions').find().toArray()
    .then(data => {
        response.render('index.ejs', { info:data })
    })
    .catch(error => console.error(error))
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})