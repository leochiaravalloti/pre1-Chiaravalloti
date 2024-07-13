const fs = require("fs").promises
const crypto = require("crypto")

class ProductManager{
    constructor(){
        this.productsFile = "products.json"
        this.products = []
    }
    
    async addProducts(title, description, price, thubnail, code, stock){
        try{
            this.products =  JSON.parse( await fs.promises.readFile(this.productsFile, 'utf8'))
            let product = {
                id : products.lenght + 1,
                title,
                description,
                price,
                thubnail,
                code,
                stock
            }
            this.products.push(product)
            return await fs.promises.writeFile(this.productsFile, JSON.stringify(products, null, 2))
        } catch (error){
            console.log("No se agrego el productos", error)
        }
    }
    async getProducts(){
        try{
            return  JSON.parse( await fs.promises.readFile(this.productsFile, 'utf8'))        
        } catch (error){
            console.log("No se pudo importar lista de usuarios", error)
        }
    }
    async getProductById(id){
        try{
            this.products =  JSON.parse( await fs.promises.readFile(this.productsFile, 'utf8'))
            let validId = this.products.find((prod)=>prod.id === id)
            if(validId){
                return console.log("Producto encontrado:",productos.id)
            } 
            return console.log("ID no corresponde con producto existente")     
        }catch(error){
            return console.log("Fallo busqueda por id", error)
        }
    }

}

let productMan = new ProductManager
productMan.addProducts("Queso", "Queso cremoso 200g", 9000,"", "0034L324", 200)