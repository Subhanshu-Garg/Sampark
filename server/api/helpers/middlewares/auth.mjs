import passport from "passport";

export  function auth(role = 'user') {
    return function(req, res, next) {
      passport.authenticate('jwt', { session: false }, (error, user, info) => {
        if (error || !user) {
          return res.status(401).json({ message: 'Unauthorized' });
        }
        if (role === 'admin' && user.role !== 'admin') {
          return res.status(403).json({ message: 'Forbidden' });
        }
        req.user = user;
        next();
      })(req, res, next);
    };
  }
  