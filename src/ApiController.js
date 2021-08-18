const axios = require('axios')
const crypto = require('crypto')
const env = require('dotenv').config()
class ApiController{
    constructor(){
          
        // this.acess_key = "80f4a81b-b1c8-4d9b-9e92-507df8c1cbb1";
        // this.secret_key = "SHoBHVMG39iYKFzdYCipgub91ywMvxIJ";
        // var timestamp = Date.now();
        // this.hash = crypto.createHmac('sha256', this.secret_key)
        //     .update(`GET\n/v1/account/getBalance\nbirthday=2000-23-07&cpf=13426933616&name=joaopaulodevtrader${timestamp}\n`).digest('sha256')
    }
    async getBankValue(){
        try{
            let bankValue = await axios.get("https://api.novadax.com/v1/account/getBalance", {headers:{
                "X-Nova-Access-Key" : this.acess_key,
                "X-Nova-Signature" : this.hash,
                "X-Nova-Timestamp" : Date.now()
            }} ) 
        }catch(err){
            console.log(err)
        }
    }
    async getCriptoSellValue(negotiationBuySimbol, negotiationBoughtSymbol){
        try{
            let criptoData =  await axios.get(`https://api.novadax.com/v1/market/depth?symbol=${negotiationBuySimbol}_${negotiationBoughtSymbol}&limit=1`)
            return criptoData.data.data.asks[0][0]
           }
           catch{
            console.log("Não foi possivel verificar o valor da moeda")
           }
    }
    async getCriptoBuyValue(negotiationBuySimbol, negotiationBoughtSymbol){
        try{
            let criptoData =  await axios.get(`https://api.novadax.com/v1/market/depth?symbol=${negotiationBuySimbol}_${negotiationBoughtSymbol}&limit=1`)
            return criptoData.data.data.bids[0][0]
           }
           catch{
            console.log("Não foi possivel verificar o valor da moeda")
           }
    }
}

module.exports = ApiController;
