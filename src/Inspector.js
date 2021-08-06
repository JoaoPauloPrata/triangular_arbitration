
class Inspector{
    constructor(){}
    verifyTriangularArbitrate(criptoValue1, criptoValue2, criptoValue3){
        const amount = 100
        var taxa = 0
        var firstTransitionValue = (amount/criptoValue1) 

        console.log(`Investir ${firstTransitionValue} BTC`)
        var secondTransitionValue = (firstTransitionValue/criptoValue2) 
       
        console.log(`Quantidade XLM a comprar ${secondTransitionValue}`)
        var thirdTransitionValue = (secondTransitionValue*criptoValue3)

        console.log(`Valor resultante ${thirdTransitionValue}`)
        if(thirdTransitionValue > (amount)){
            return true;
        }
        return false;
    }
    greenSignal(previousValue, actualValue){
        if(actualValue > previousValue){
            return true
        }
        return false;
    }
}


module.exports = Inspector;
