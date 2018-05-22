// load the express module
var express = require('express');
//  load the router module from the express
var router = express.Router();
// to load the data.json file 
var dataFile = require('../data/data.json');
// to take the user value through the route
router.get('/friends/:id', (req, res) =>{
    // store the particular data in a variable 
    var friend = dataFile.friends[req.params.id];
    res.send(`
        <h1>${friend.title}</h1>
        <h1>${friend.name}</h1>
        <p>${friend.summary}</p>
    `);
});
// create friends route
router.get('/friends',(req,res) =>{

    //  to get the data from json file 
    var info = '';
    dataFile.friends.forEach(item => {
        info +=`
        <li>
        <h2>${item.name}</h2>
        <p>${item.summary}</p>
        <h4>${item.title}</h4>
        </li>
        
        
        
        `;
    });
    res.send(`
        <h1>WELCOME MY FRIENDS </h1>
        <hr>
        ${info}

    `);

});

// export this module to use in another module 
module.exports = router;
