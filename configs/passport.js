const LocalStrategy = require('passport-local').Strategy;
const User = {
    id: 1,
    email: 'admin@gmail.com',
    password: '123456'
};

module.exports = function (passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
            if(User.password === password){
                return done(null, User);
            }
            else{
                return done(null, false);
            }
        })
    );

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        if(User.id === id){
            done(null, User);
        }
    });
}