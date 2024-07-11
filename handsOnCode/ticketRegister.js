class TicketRegistrator{
    constructor(){
        this.ticketManager = []
        this.precioBaseDeGanancia = 1.15
        this.id = 0
    } 
    agregarEvento(nombreEvento, lugarEvento, precioEvento, capacidadEvento = 50, fechaEvento= new Date()){
        const precio = precioEvento*this.precioBaseDeGanancia
        let participantes = []
        this.ticketManager.push({
            nombre: nombreEvento,
            lugar: lugarEvento,
            precio,
            capacidad: capacidadEvento,
            fecha: fechaEvento,
            id: this.id++,
            participantes
        })
    }
    getEventos(){
        console.log(this.ticketManager)
    }
    agregarUsuario(idEvento, usuarioEvento){
        const eventoDisp = this.ticketManager.find((evento)=>evento.id === idEvento)
        if(!eventoDisp){
            console.log("No existe evento para id especificado")
        }else{
            const usuarioReg = this.ticketManager.includes(usuarioEvento)
            if(usuarioReg){
                return console.log("Usuario ya fue registrado")
            }
            eventoDisp.participantes.push(usuarioEvento)
            return
        }
    }

}

let evento = new TicketRegistrator()
evento.agregarEvento("lola", "cordoba", 3000)
evento.agregarEvento("cosquin", "san luis", 3500, 2000)
evento.agregarUsuario(1,"Ale Val")
evento.getEventos()
