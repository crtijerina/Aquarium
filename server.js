// Dependencies
// ===========================================================
var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();
var PORT = process.env.PORT || 3001;

app.engine('handlebars', exphbs({defaultLayout:"index"}));
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// ROUTER
// ===========================================================
app.get('/', (req, res) => {
    res.render('landing');
  });
  
  app.listen(PORT, () => {
    console.log(`hello form TX ${PORT}`);
  });
