
// Dependencies
// ===========================================================
if(process.env.NODE_ENV !=="production"){
  require('dotenv').config()
}



var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();
var bcrypt = require('bcrypt') 
var PORT = process.env.PORT || 3001;
var passport = require('passport');
var flash = require('express-flash');
var session = require('express-session');
var initializePassport = require('./passport-config');
const { name } = require('ejs');

initializePassport(
  passport,
  name =>  users.find(user=> user.name===name), 
id=> users.find(user=> user.id===id)
  )

// this is temporary 
var users = []

app.engine('handlebars', exphbs({defaultLayout:"index"}));
app.set('view engine', 'handlebars');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(flash())
app.use(session({
secret: process.env.SESSION_SECRET,
resave: false,
saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())


// ROUTER
// ===========================================================
app.get('/', (req, res) => {
    res.render('landing', { name: "Aquarium"});
  });
  app.get('/aquarium', (req, res) => {
    res.render('aquarium');
  });
  app.get('/register', (req, res) => {
    res.render('register', { name: "Aquarium"});
  });
  app.post('/register', async (req, res) => {
  try{
const hashedPassword = await bcrypt.hash(req.body.password, 10)
users.push({
  id: Date.now().toString(),
name: req.body.name,
password: hashedPassword
})
res.redirect('/')  
} catch {
res.redirect('/register')
  }
  console.log(users)
  });
  app.post('/', passport.authenticate('local', {
    successRedirect: '/aquarium',
    failureRedirect: '/',
    failureFlash: true 
  }))

  app.listen(PORT, () => {
    console.log(`hello form TX ${PORT}`);
  });

