const { request, response } = require('express')
const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/signupmodels')


router.post('/signup',  (request, response) => {

    
    const signedUpUser = new signUpTemplateCopy({
     fullname:request.body.fullname,
     email:request.body.email,
     password:request.body.password,
     gender:request.body.gender

    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
})

module.exports = router