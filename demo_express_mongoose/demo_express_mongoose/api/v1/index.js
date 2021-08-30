// /api/v1/index.js
// routing for the api

const router = require('express').Router();
router.use('/users', require('./users'));   //  ./users folder   and   /users is route

module.exports = router;