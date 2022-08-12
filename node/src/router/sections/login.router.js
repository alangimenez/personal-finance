const express = require('express');
const router = express.Router();
const passport = require('../../middlewares/passport')

router.get('/login', (req, res) => {
    res.json({message: "get login"})
})

router.post(
    '/login', 
    passport.authenticate('login', { failureRedirect: '/error' }),
    (req, res) => {
    res.json({message: "post login"})
})

router.get('/register', (req, res) => {
    res.json({message: "get register"})
})

router.post(
    '/register', 
    passport.authenticate('registro', { failureRedirect: '/error' }),
    (req, res) => {
        res.json({message: "post register"})
})

module.exports = router