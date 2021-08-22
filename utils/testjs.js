router.post('/login', (req, res) => {
    passport.authenticate('local', { failureRedirect: '/login'})
    // expects {email: 'test@gmail.com', password: 'password1234'}
    User.findOne({
      where: {
        username: req.body.username
      }
    }).then(dbUserData => {
      if (!dbUserData) {
        res.status(400).json({ message: 'No user with that email address!' });
        return;
      }
  
      const validPassword = dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
    
        res.json({ user: dbUserData, message: 'You are now logged in!' });
      });
    });
  });