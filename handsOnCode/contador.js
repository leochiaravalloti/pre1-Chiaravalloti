//DESARROLLO PROPIO DEL HANDS ON CODE

class Contador{
    constructor(nombre,cuenta){
        this.nombre=nombre
        this.cuenta = cuenta
    }
    contar(){
        this.cuenta++
    }
    getCuentaIndividual(){
        console.log(`Cuenta individual de ${this.nombre} : ${this.cuenta} `)       
    }
}

let contador1 = new Contador("Juan", 0)
contador1.contar()
contador1.contar()
let contador2 = new Contador("Pablo", 0)
contador2.contar()
contador2.contar()
contador2.contar()

contador1.getCuentaIndividual()
contador2.getCuentaIndividual()

//SOLUCION DEL PROFE; observar STATICS

class ContadorP {
    static cuentaGlobal = 0

    constructor(responsable) {
        this.responsable = responsable
        this.cuentaIndividual = 0
    }

    obtenerResponsable() {
        return this.responsable
    }

    obtenerCuentaIndividual() {
        return this.cuentaIndividual
    }

    static obtenerCuentaGlobal() {
        return ContadorP.cuentaGlobal
    }

    contar() {
        this.cuentaIndividual++
        ContadorP.cuentaGlobal++
    }
}