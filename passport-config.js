var LocalStrategy = require('passport-local').Strategy
var bcrypt = require('bcrypt')

function initialize(passport, getUserByName, getUserById){
var authenticateUser = async (name, password, done) => {
var user = getUserByName(name)
    if (user == null){
        return done(null,false, {message: 'No user with that user name'})
    }
    try{
        if(await bcrypt.compare(password, user.password)) {
        return done (null, user)
        }else {
            return done(null, false, {message: 'Password incorrect' })
        }
    
    } catch (e) {
        return done(e)
    
    }
}
passport.use(new LocalStrategy({ usernameField: "name"},
authenticateUser))
passport.serializeUser((user, done)=> done(null, user.id))
passport.deserializeUser((id, done)=> {
   return done(null, getUserById(id))
    })
}
    module.exports = initialize
    //     function(username, password, done) {
    //       User.findOne({ username: username }, function(err, user) {
    //         if (err) { return done(err); }
    //         if (!user) {
    //           return done(null, false, { message: 'Incorrect username.' });
    //         }
    //         if (!user.validPassword(password)) {
    //           return done(null, false, { message: 'Incorrect password.' });
    //         }
    //         return done(null, user);
    //       });
    //     }
    //   ));



