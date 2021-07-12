const axios = require('axios')

class ApiController{
    constructor(){}
    async getCriptoValue(negotiationBuySimbol, negotiationBoughtSymbol){
        try{
            let criptoData =  await axios.get(`https://api.novadax.com/v1/market/ticker?symbol=${negotiationBuySimbol}_${negotiationBoughtSymbol}`)
            return criptoData.data
           }
           catch{
            console.log("Erro")
           }
    }
}

module.exports = ApiController
