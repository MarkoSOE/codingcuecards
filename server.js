const express = require('express');
const app = express();
const PORT = 3001;

app.set('views', __dirname + '/views/')
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.static(__dirname + '/public'))

app.get('/', (request,response) => {
    response.sendFile(__dirname + 'index.html')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})