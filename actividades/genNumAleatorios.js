async function randomGen(callback){
    for (let index = 0; index < 10000; index++){
        const numero = Math.round(Math.random()*20)
        callback(numero)
    }
    return console.log("Generación finalizada")
}
let numReg = []
for( let index = 0; index <= 20; index++){
    numReg.push({num: index, rep: 0})
}
function contador(num){
    return new Promise((resolve, reject)=>{
        const numero = numReg.find((x)=> numReg.num === x)
        if(!numero){
            reject("error")
        } 
        resolve(numReg.rep++)
    })
}

randomGen(contador)
