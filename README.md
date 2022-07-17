# Introduction

<a href="https://interviewprepapp.herokuapp.com/getQuestions?"> Full stack interview flashcards</a>

This is a web application where the user is greeted with a homepage that contains a heading and a button. Upon clicking the button, the user is presented a random interview type question in the space below. The user can click the button any number of times to generate new questions.


# How it's made

<p align="middle">
<img src="https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black&style=plastic" alt="badge sample"/>
<img src="https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=black&style=plastic" alt="badge sample"/>
<img src="https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=black&style=plastic" alt="badge sample"/>
<img src="https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=black&style=plastic" alt="badge sample"/>
<img src="https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=black&style=plastic" alt="badge sample"/>
<img src="https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white&style=plastic" alt="badge sample"/>
<img src="https://img.shields.io/badge/-Git-F05032?logo=git&logoColor=black&style=plastic" alt="badge sample"/>
</p>

The web application is built using the Express framework, allowing us to manage client requests to our server.js. Upon opening the application, the static HTML is sent to the browser as a response to the '/' route. Once the user clicks the button on the homepage, a get request is sent to our server.js file. The server then grabs the contents of the collection within the database, converts it to an array, and sends a single document to our EJS file which renders an HTML with the contents of the document displayed.

# Optimizations

Currently, the server grabs all documents from the collection, converts it to an array, generates a random number to index the array, and from there sends the single element length array to the EJS file. An optimization would be to grab a single document from the mongodb collection instead of the whole collection. This would reduce the time between getting the question from the database to the HTML the EJS renders for the user to see. Another optimization could be made to make the grabbing of random documents more random. As of now there's a chance of getting the same document twice in a row. To improve this I would implement a method of keeping track of the past document that was obtained and preventing the server from obtaining the same document a second time in a row. 

# Lessons learned

In this project I learned more about CSS styling and animations, as well as organization of sections using flexbox. I've also learned more about connecting to mongodb using express/node.js even though the application only uses read requests, I've initially had to insert the documents into the collection in a single array of objects. The biggest hurdle was getting the application working once deployed to Heroku. Hours were spent debugging when the issue was not adding in the database connection string as a config variable within Heroku.
