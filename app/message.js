var express = require('express');
var router = express.Router();


router.get('/',function(req,res){
    console.log('message.js: get  getRecentPosts');
    req.queries.getRecentPosts(req,res);
});

router.get('/forUser',function(req,res){
    console.log('message.js: get  getMessagesForUser');
    req.queries.getMessagesForUser(req,res);
});

router.get('/filters',function(req,res){
    console.log('message.js: get  getFilterNames');
    req.queries.getFilterNames(req,res);
});

router.get('/filtered',function(req,res){
    console.log('message.js: get  getFilteredData');
    req.queries.getFilteredData(req,res);
});

router.delete('/',function(req,res){    
    console.log('message.js: delete  deleteMessage');
    req.queries.deleteMessage(req,res);
});

router.delete('/',function(req,res){    
    console.log('message.js: update  updateMessage');
    req.queries.updateMessage(req,res);
});

module.exports = router;