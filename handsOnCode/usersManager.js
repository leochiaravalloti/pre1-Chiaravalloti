const fs = require("fs").promises

class UserManager{
    construsctor(){
        this.usuariosFilr = "usuarios.json"
    }
    async crearUsuario(usuario){
        try{
            let usuarios = await leerUsuarios()
            usuarios.push(usuario)
            await fs.promises.writeFile(this.usuariosFilr, JSON.stringify(usuarios, null, 2))
        }catch(error){
            console.log(error)
        }
    }
    async consultarUser(){
        try{
            return console.log(await leerUsuarios())  
        }catch(error){
            console.log(error)
        }
    }
    async leerUsuarios(){
        try {
            const data = await fs.readFile(this.usuariosFilr, 'utf8')
            return JSON.parse(data)
        } catch (error) {
            if (error.code === 'ENOENT') {
                return []
            } else {
                throw error
            }
        }
    }

}
module.exports = UserManager