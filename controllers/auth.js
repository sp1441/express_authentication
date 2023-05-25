const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig');

router.get("/signup", (req, res) => {
  return res.render("auth/signup");
});

router.get("/login", (req, res) => {
  return res.render("auth/login");
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/auth/login',
  successFlash: 'Welcome back ...',
  failureFlash: 'Either email or password is incorrect'
}));

module.exports = router;