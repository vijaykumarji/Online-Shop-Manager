const JWtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const databaseConfig = require('./database');


module.exports = function(passport) {
    var opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    opts.secretOrKey = databaseConfig.secret;

    passport.use(new JWtStrategy(opts, (jwt_payload, done) => {

        const password = databaseConfig.sessionMap.get(jwt_payload.Email);
        
        console.log(typeof password + ' ' + password);
        console.log(typeof jwt_payload.Password + ' ' + jwt_payload.Password);

        if (password === jwt_payload.Password) {

            return done(null, {Email: jwt_payload.Email, Password: jwt_payload.Password});
        } else {
            return done(null,false);
        }
        
        
    }));
};