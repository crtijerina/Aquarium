const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const connection = ('/router');
const User = connection.User;

// passport. use('local-signup', new LocalStrategy(

//     {
//         usernameField: 'username',
//         passwordField: 'password',
//         passReqToCallback: true
//     }
// ))

module.exports = passport;