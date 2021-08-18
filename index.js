const ApiController = require('./src/ApiController')
const Inspector = require('./src/Inspector')
const fs = require('fs')
const coin = "BRL"
const criptoSymbol_1 = "ETH"
const criptoSymbol_2 = "BRZ"

async function main(){
    console.log("start main")
    //Classe que enviará as requisiçoes para a plataforma Novadax.
    controller = new ApiController();
    //Armazenando valor das moedas para verificar se é vantajoso executar uma arbitragem triangular.
    var criptoValue1 = await controller.getCriptoSellValue(criptoSymbol_1, coin) //Primeiro valor deve ser BTC ou ETH, pois são as unicas moedas que servem como moeda de compra.
    var criptoValue2 = await controller.getCriptoSellValue(criptoSymbol_2, criptoSymbol_1) //Segundo valor deve ser igual ao primeiro valor da linha anterior
    var criptoValue3 = await controller.getCriptoBuyValue(criptoSymbol_2, coin) // Primeiro valor deve ser igual ao primeiro valor da linha anterior    
    //Criando classe que verifica se é vantajoso ou não executar a arbitragem.
    inspector = new Inspector(criptoValue1, criptoValue2, criptoValue3);
    var profit = inspector.verifyTriangularArbitrate()
    if(profit == true){
        var data = new Date();
        var atual_time = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
        fs.appendFile('saida.txt', `Executar ${atual_time} - Sequencia de transações: ${coin} -> ${criptoSymbol_1} -> ${criptoSymbol_2} -> ${coin}\n`, err => {
            if (err) throw err
        });
    }
    else{
        var data = new Date();
        var atual_time = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
        fs.appendFile('saida.txt', `Não execute ${atual_time} - Sequencia de transações: ${coin} -> ${criptoSymbol_1} -> ${criptoSymbol_2} -> ${coin}\n`, err => {
            if (err) throw err
        });
    }
    main()
}
main()







