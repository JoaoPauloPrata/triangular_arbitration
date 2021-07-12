
const ApiController = require('./src/ApiController')
const Inspector = require('./src/Inspector')

async function main(){
    controller = new ApiController();
    var criptoData1 = await controller.getCriptoValue("BTC", "BRL")
    var criptoData2 = await controller.getCriptoValue("ETH", "BTC")
    var criptoData3 = await controller.getCriptoValue("BRZ", "ETH")
    inspector = new Inspector();
    var profit = inspector.verifyTriangularArbitrate(criptoData1.data.lastPrice, criptoData2.data.lastPrice, criptoData3.data.lastPrice)
    console.log(profit)
}
main()




