/*const router = require('express').Router();
const adapter = require('../Model/Adapter');*/
import express from 'express';
const router = express.Router();
import {APILogin, APIRegister} from '../Model/HaciendaAPIAdapter.js'

router.route('/login').post((req, res) => {
    console.log(req.body.userName)
    APILogin({userName:req.body.username, pwd: req.body.pwd}, 
        function(success){
            res.send(success.resp)
        },
        function(error){
            res.send(error)
        }
    );
});

// router.route('/register').post((req, res) => {
//     console.log(req.body)

//     var userdata = {
//         userName: req.Body.username,
//         fullname: req.body.fullname,
//         email: req.body.email,
//         about: req.body.about,
//         country: req.body.country,
//         pwd: req.body.pwd
//     };

//     APIRegister(userdata, 
//         function(success){
//             res.send(success.resp)
//         },
//         function(error){
//             res.status(200).send(error);
//         }
//     );
// });

router.post('/register',(req, res) => {
    console.log(req.body)

    var userdata = {
        userName: req.Body.username,
        fullname: req.body.fullname,
        email: req.body.email,
        about: req.body.about,
        country: req.body.country,
        pwd: req.body.pwd
    };

    APIRegister(userdata, 
        function(success){
            res.send(success.resp)
        },
        function(error){
            res.status(200).send(error);
        }
    );
});

export default router;