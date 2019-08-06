import { Strategy as JwtStrategy, ExtractJwt as ExtractJwt } from 'passport-jwt'
import User from '../models/User'
import keys from '../config/keys'

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

export default passport => {
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    console.log(jwt_payload);
    User.findOne({
      where: {
        id: jwt_payload.id
      }
    })
      .then(user => {
        if (user) {
          return done(null, user);
        }

        return done(null, false);
      })
      .catch(err => console.log(err));
  }));
}