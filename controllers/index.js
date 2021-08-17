
// passport authintcation

app.post('/aquarium.handlebars',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);