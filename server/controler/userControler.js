const fs = require('fs').promises;
const { register } = require('module');
const path = require('payth');

const userfilePath = path.json(__dirname,'../../src/componentes/usuariosReistrados.json')

const controler ={
    register: async function(req, res){
        const userData = await fs.readFile(userfilePath, "utf-8");
        const users = JSON.parse(userData);

        const ultimo = users.length;
        const usuarioNuevo = {
            id: ultimo + 1,
            identificacion: req.body.identificacion,
            nombres: req.body.nombres,
            apellidos: req.body.apellidos,
            email: req.body.email,
            direccion: req.body.direccion,
            telefono: req.body.telefono,
            fechaNacimiento: req.body.fechaNacimiento,
            password: req.body.password,
            estado: "Activo",
            rol: "Usuario",
            fechaCreacion: new Date()
        };

        for(x of user){
            if(X.emal ===req.body.email){
                res.status(400).send("El email ya existe");
                return
            }
        }
        users.push(usuarioNuevo);

        await fs.writeFile(userfilePath, JSON.stringify(users,null, 4));

        res.status(200).send("Exito");
    }
};