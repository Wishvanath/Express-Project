// load the express module
var express = require('express');
// load the router module to handle the route of the page 
var router = express.Router();
// to show the welcome title for the user (front end )
// create root route
// now instead of app.get you can use the router.get() mthod 
router.get('/', (req,res) =>{
    // link the external css file from your css folder 
    res.send(`
    <link rel = "stylesheet"  type="text/css" href ="/css/style.css">
    <div class ="back_image">
    <h1>Welcome Friends</h1>
    </div>
    
    
    
    ">
    `);
});

// export this module to use in app.js file
module.exports = router;