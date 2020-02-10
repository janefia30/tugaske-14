var express = require('express');
var Router = express.Router('../model/posts');

Router.get('/store', function (req, res, next) {
    post.store(req.body, function (err, result) {
        res.redirect('/posts');
    });
});

module.exports = Router;
