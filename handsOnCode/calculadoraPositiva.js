// const calculadora = new Promise((resolve, reject) => {
//     const resultado = 0
//     function suma(a, b){
//         if(a==0 || b==0){ 
//             return reject("Operación innecesaria")
//         }
//         resultado = a + b
//         if(0 > resultado){
//             return reject("La calculadora solo debe devolver valores positivos")
//         }
//         return resolve(`Resultado: ${resultado}`)
//     }
// })
// ta todo mal

suma = (a,b) => {
    return new Promise((resolve, reject) =>{
        if(a==0 || b==0){
                reject("Operación innecesaria")
            }
            resultado = a + b
            if(0 > resultado){
                reject("La calculadora solo debe devolver valores positivos")
            }
            resolve(`Resultado: ${resultado}`)
    })
}

async function calculadora(){
    try {
        console.log(await suma(6,5))
        console.log( await suma(9,0))
        console.log(await suma(1,-4))
    } catch (error) {
        console.log("error")
    }
}

calculadora()

