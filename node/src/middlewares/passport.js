const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../daos/User')
const userDao = require('../persistence/dao/user.dao')

// const { logger, errorLogger } = require('../config/config.log4js');

passport.use('registro', new LocalStrategy({
    passReqToCallback: true,
},
    async (req, username, password, done) => {
        const newUser = new User(username, encrypt(password), req.nombre, req.apellido)
        const user = await userDao.getInfoByEmail(username);
        if (user.length > 0) {
            req.session.error = "El email ya se encuentra registrado";
            console.log(req.session.error);
            return done(null, false)
        }
        const userRegistered = await userDao.saveInfo(newUser);
        req.session.user = newUser;
        console.log('El usuario fue registrado con éxito');
        return done(null, userRegistered);
    }
));

passport.use('login', new LocalStrategy({
    passReqToCallback: true,
},
    async (req, username, password, done) => {
        const user = await userDao.getInfoByEmail(username);
        if (user.length === 0) {
            req.session.error = "Error en el login, el usuario ingresado no esta registrado.";
            console.error(req.session.error);
            return done(null, false);
        }
        if (!isValidPassword(user, password)) {
            req.session.error = "Error en el login, la contraseña ingresada es incorrecta"
            console.error('Invalid password');
            return done(null, false);
        }
        req.session.user = user[0];
        return done(null, user[0]);
    }));

const salt = () => bcrypt.genSaltSync(10);
const encrypt = (password) => bcrypt.hashSync(password, salt());
const isValidPassword = (user, password) => bcrypt.compareSync(password, user[0].password);


passport.serializeUser((user, done) => {
    console.info('Inside serializer');
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    console.info('Inside deserializer');
    const user = await userDao.getInfoByEmail(id);
    done(null, user[0]);
});

module.exports = passport;