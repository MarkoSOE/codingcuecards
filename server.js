const express = require('express');
const MongoClient = require('mongodb').MongoClient
const app = express();
const PORT = 3001;
const dotenv = require('dotenv');
dotenv.config()
const { ObjectId, Collection } = require('mongodb');
const bodyParser = require('body-parser');

app.set('views', __dirname + '/views/')
app.set('view engine', 'ejs')
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'))

let db,
db2,
dbConnectionStr = process.env.DB_STRING,
dbName = 'cuecard'

MongoClient.connect(dbConnectionStr, {useUnifiedTopology : true})
    .then(client => {
        console.log('Connected to database')
        db2 = client.db(dbName)
    }).catch(error => console.error(error))

    app.get('/getQuestions', async (request, response) =>{
        try{
            const data = await db2.collection('cuecardquestions').find().toArray()
            //select random question
            function randomIntFromInterval(min, max) { // min and max included 
                return Math.floor(Math.random() * (max - min + 1) + min)
                }
            const rndInt = randomIntFromInterval(0, data.length-1)
            response.render('index.ejs', { info:[data[rndInt]]})
        }
        catch(error){
            response.status(500).json({message: error.message})
        }
    })
    
    app.get('/', (request, response) => {
        response.sendFile(__dirname + '/index.html')
    })


    app.listen(process.env.PORT || PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })      