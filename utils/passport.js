// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const User=require('../models/User')
// var bCrypt = require('bcrypt');

// // passport.use('local-signup', new LocalStrategy(
 
// //     {
// //         usernameField: 'username',
// //         passwordField: 'password',
// //         passReqToCallback: true 
 
// //     },
 
// // ));

// // function(req, username, password, done) {

// // var generateHash = function(password) {
 
// //     return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
 
// // };
 
// // }

// module.exports = function(passport) {
//     const signup= function(req,username,password,done) {
//         User.findAll({where:{username:username}})
//         .then((rows) => {
//             if (rows.length) {
//                 return done(null, false, req.flash('error-msg', 'That username is already taken'));
//             } else {
//                 bcrypt.hash(req.body.password, 10, (error,hash) => {
//                      var username = req.body.username;
//                      var email = req.body.email;
//                      var password = hash;
//                      var data = {username,email, password}
//                      User.create({
//                          username:username,
//                          email: email,
//                          password: password,
//                      })
//                      .then((rows) => {
//                         return done(null, false, req.flash('success_msg', 'Successfully Registered'))
//                      })
//                      .catch((error) => {
//                          return done(error);
                     
//                     })
                
//                 })
//             }
//         })
//         .catch((error) => {
//             return done(error);
//         })
//     }

    

//     const login = function(req,username, password, done){
//         User.findAll({where: {username:username}})
//         .then((rows) =>){
//             if (!rows.length) {
//                 return done(null, false, req.flash('error-msg', 'That username is already taken'));
//             }
//         }
//         bcrypt.compare(password.rows[0].password,(error,result) => {
//             if (error) throw error;
//             if(result) {
//                 req.session.userid = rows[0].user_id;
//                 return done(null,rows[0, req.flash('success-msg', 'Successfully logged in')])
//             } else {
//                 return done(null, flash, req.flash('error_msg', 'Wrong Password'))
//             }
//         })
// }