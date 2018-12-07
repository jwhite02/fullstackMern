// use req.usr, req.body & req.query to interact with DB
//const mongoose = require("mongoose");
const User = require("../models/Users")
const requireLogin = require('../middleware/requireLogin');
const passport = require('passport');

module.exports = app => {
    app.get(
        '/api/recipes', requireLogin, (req, res) => {
            User.findOne({googleId: req.user.googleId})
            .then(doc => {
                res.send(doc);
            })
            .catch(err => {
                console.error("There is an error here")
            });
    });

    app.post("/api/recipes", requireLogin, (req, res) => {
      User.findOne({ googleId: req.user.googleId })
        .then(doc => {
          let found = req.user.cheeseUrl.find(element => {
            return element === req.body.cheeseUrl;
          });

          if (found || null) {
            res.send(doc);
          } else if (req.body.cheeseUrl == null){
              res.send(doc);
          } 
          else{
              doc.cheeseUrl.push(req.body.cheeseUrl);
              doc.save();
              res.send(doc);
          }
        })
        .catch(err => {
          console.error("There is an error in the post");
        });
    });
}