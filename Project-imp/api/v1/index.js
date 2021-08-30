// api/v1/index.js
// routing for the api

const router = require('express').router();
router.use('/user',require('./users'));

module.exports=router;

// ex:http://localhost:3000/api/v1/users;