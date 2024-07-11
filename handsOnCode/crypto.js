const crypto = require("crypto")

class Usuarios{
    constructor(){
        this.usuarios = []
    } 
    agregarUsuario(nombreUs, apellisoUs, nombreUsuarioUs, contrasena){
        this.usuarios.push({
            nombre: nombreUs,
            apellido: apellisoUs,
            nombreUser: nombreUsuarioUs,
            contrasena: crypto.createHash("sha512").update(contrasena).digest("hex")
        })
    }
    mostrarUsuario(){
        console.log(this.usuarios)
    }
    validarUsuario(usuario, contrsena){
        const usuarioEx = this.usuarios.find((us)=> us.nombreUsuarioUs === usuario)
        const contraHashed = crypto.createHash("sha512").update(contrsena).digest("hex")
        if(!usuarioEx){
            return console.log("Usuario no regitrado")
        }
        if(this.usuarios.contrasena === contraHashed){
            return console.log("Logueado")
        }
        return console.log("Error")
    }
}

let listaUsuarios = new Usuarios()
listaUsuarios.agregarUsuario("Leo", "Perez", "leoperez12", "ppst34ef")
listaUsuarios.mostrarUsuario("xxxx", "xxxx")
listaUsuarios.validarUsuario("xxxx", "xxxx")
listaUsuarios.validarUsuario("leoperez12", "xxxx")
listaUsuarios.validarUsuario("leoperez12", "ppst34ef")
