var express = require('express');
var Router = express.Router();

Router.get('/', function (req, res, next) {
    res.render('blog/index', { title: 'page baru' });
});

module.exports = Router;
