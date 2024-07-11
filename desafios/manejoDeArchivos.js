const fs = require("fs").promises
const crypto = require("crypto")

class ProductManager{
    constructor(){
        this.productsFile = "products.json"
    }
    async addProducts(title, description, price, thubnail, code, stock){
        try{
            let products =  JSON.parse( await fs.promises.readFile(this.productsFile, 'utf8'))
            let product = {
                id : products.lenght + 1,
                title,
                description,
                price,
                thubnail,
                code,
                stock
            }
            products.push(product)
            return await fs.promises.writeFile(this.productsFile, JSON.stringify(products, null, 2))
        } catch (error){
            console.log("No se agrego el productos", error)
        }
    }
}

let productMan = new ProductManager
productMan.addProducts("Queso", "Queso cremoso 200g", 9000,"", "0034L324", 200)