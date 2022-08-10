const CrudMongo = require('../crud/crud');
const usuarioModel = require('../../model/User');
// const { ErrorHandler } = require('../../../error/error');
// const error = new ErrorHandler();

class DaoMongoUsuario extends CrudMongo {
    constructor() {
        super(usuarioModel)
    }

    async getInfoByEmail(email) {
        try {
            return await this.model.find({ email: email }, { __v: 0 });
        } catch (e) {
            return console.log("CRUD Error", `El Crud ha tenido un error -> ` + e.message);
            // return error.errorProcess("CRUD Error", `El Crud ha tenido un error -> ` + e.message);
        }
    }

    /* async actualizarAvatarUsuario(usuario) {
        try {
            await this.model.updateOne({ id: usuario.id }, { $set: { foto: usuario.foto } });
        } catch (e) {
            return error.errorProcess("CRUD Error", `El Crud ha tenido un error -> ` + e.message, res);
        }
    }

    async actualizarCarritoDeUsuario(idUser, idCart) {
        try {
            await this.model.updateOne({ id: idUser }, { $set: { cart: idCart } });
            return await this.leerInfoPorId(idUser);
        } catch (e) {
            return error.errorProcess("CRUD Error", `El Crud ha tenido un error -> ` + e.message);
        }
    }

    async actualizarPerfil(idUser, datos) {
        try {
            await this.model.updateOne({ id: idUser }, { $set: { direccion: datos.direccion, telefono: datos.telefono } });
            return await this.leerInfoPorId(idUser);
        } catch (e) {
            return error.errorProcess("CRUD Error", `El Crud ha tenido un error -> ` + e.message);
        }
    }

    async actualizarPassword(idUser, password) {
        try {
            await this.model.updateOne({ id: idUser }, { $set: { password: password } });
            return await this.leerInfoPorId(idUser);
        } catch (e) {
            return error.errorProcess("CRUD Error", `El Crud ha tenido un error -> ` + e.message);
        }
    }*/
}

const userDao = new DaoMongoUsuario()

module.exports = userDao
