//  creat a server in express js
// load the express module 
var express = require('express');
var app = express();

// to load index.js module 
app.use(require("./routes/index"));
// to load friends.js module
app.use(require("./routes/friends"));

// to use the external file with the help of static middle ware
app.use(express.static('app/public'));
// now this public folder is accessable global

// to assign the port no dynamically using the environment variable 
const port_no = process.env.PORT || 3000;
// listening port 
app.listen(port_no,() =>{
    console.log(`You are listening the port no ${port_no}`);
})
