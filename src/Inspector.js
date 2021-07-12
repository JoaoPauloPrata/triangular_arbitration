
class Inspector{
    
    constructor(){}
    verifyTriangularArbitrate(criptoValue1, criptoValue2, criptoValue3){
        const amount = 30
        var firstTransitionValue = (amount/criptoValue1) * (1- 0.002)
        var secondTransitionValue = (firstTransitionValue/criptoValue2) * (1- 0.002)
        var thirdTransitionValue = (secondTransitionValue/criptoValue3) * (1- 0.002)
        if(thirdTransitionValue > (amount + 0.02)){
            return true;
        }
        return false;
    }
}


module.exports = Inspector
