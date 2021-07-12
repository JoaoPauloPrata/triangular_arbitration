const axios = require('axios')

function verifyTriangularArbitrate(criptoValue1, criptoValue2, criptoValue3){
    const amount = 30
    var firstTransitionValue = (amount/criptoValue1) * (1- 0.0002)
    var secondTransitionValue = (firstTransitionValue/criptoValue2) * (1- 0.0002)
    var thirdTransitionValue = (secondTransitionValue/criptoValue3) * (1- 0.0002)
    console.log(thirdTransitionValue)
}

async function getPrice(symbol_1, symbol_2){
   try{
    let criptoData =  await axios.get(`https://api.novadax.com/v1/market/ticker?symbol=${symbol_1}_${symbol_2}`)
    return criptoData.data
   }
   catch{
    console.log("Erro")
   }
}

async function main(){
    var criptoData1 = await getPrice("BTC", "BRL")
    var criptoData2 = await getPrice("ETH", "BTC")
    var criptoData3 = await getPrice("BRZ", "ETH")
    verifyTriangularArbitrate(criptoData1.data.lastPrice, criptoData2.data.lastPrice, criptoData3.data.lastPrice)
}
main()




