
const ApiController = require('./src/ApiController')
const Inspector = require('./src/Inspector')
const coin = "BRL"
const criptoSymbol_1 = "ETH"
const criptoSymbol_2 = "BRZ"
async function main(){
    controller = new ApiController();
    var criptoData1 = await controller.getCriptoValue(criptoSymbol_1, coin) //Primeiro valor deve ser BTC ou ETH
    console.log(criptoData1.data.asks[0][0])
    var criptoData2 = await controller.getCriptoValue(criptoSymbol_2, criptoSymbol_1) //Segundo valor deve ser igual ao primeiro valor da linha anterior
    console.log(`Preço de compra ${criptoSymbol_2} em ${criptoSymbol_1}${criptoData2.data.asks[0][0]}`)
    var criptoData3 = await controller.getCriptoValue(criptoSymbol_2, coin) // Primeiro valor deve ser igual ao primeiro valor da linha anterior
    console.log(`Vender ${criptoSymbol_2} a ${criptoData3.data.bids[0][0]} ${coin}`)
    // controller.getBankValue()
    inspector = new Inspector();
    var profit = inspector.verifyTriangularArbitrate(criptoData1.data.asks[0][0], criptoData2.data.asks[0][0], criptoData3.data.bids[0][0])
    if(profit == true){
        console.log("EXECUTAR")
    }
    else{
        console.log("NAO EXECUTAR")
    }
}
main()




