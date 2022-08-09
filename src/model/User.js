
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const colection = 'users';

const userSchema = new Schema ({
    id: {type: String},
    email: {type: String},
    password: {type: String},
    nombre: {type: String},
    apellido: {type: String},
    created: {type: String},
    updated: {type: String}
})

const User = mongoose.model(colection, userSchema);

module.exports = User;