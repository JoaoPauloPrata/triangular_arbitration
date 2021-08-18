
class Inspector{

    constructor(criptoValue1, criptoValue2, criptoValue3){
        this.criptoValue1 = criptoValue1;
        this.criptoValue2 = criptoValue2;
        this.criptoValue3 = criptoValue3;
    }
    verifyTriangularArbitrate(){
        const amount = 100
        var taxa = 0.997
        var firstTransitionValue = (amount/this.criptoValue1) *taxa;
        var secondTransitionValue = (firstTransitionValue/this.criptoValue2) * taxa;
        var thirdTransitionValue = (secondTransitionValue*(this.criptoValue3)) * taxa;
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
