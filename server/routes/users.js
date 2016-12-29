var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Users = require('../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
    Users.find(function(err, users){
        res.send(users);
     })
});

/* Post a new user */
router.post('/', function(req, res, next){

    var newuser=new Users(req.body);
    newuser.save(function(err) {
        if (err) {
            res.send(err.errors);
        }else{
            res.json({message: 'user created!'});
        }
    })
});


router.delete('/:oppId', function(req, res, next){
    var idtoDelete=req.params.oppId;

    Users.findByIdAndRemove(idtoDelete,function(){
        res.json({message: idtoDelete + " deleted"});
    });
})

module.exports = router;
