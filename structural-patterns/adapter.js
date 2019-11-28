class OldCalc {
    MakeOperations(t1, t2, operation) {
        switch (operation) {
            case 'add':
                return t1 + t2;
                break;
            case 'sub':
                return t1 - t2;
                break;
            default:
                return NaN;
        }
    }
}

class NewCalc {
    add(t1, t2) {
        return t1 + t2;
    }
    sub(t1, t2) {
        return t1 - t2;
    }    
}

class CalcAdapter {
    constructor() {
        this.calc = new NewCalc();
    }
    MakeOperations(t1, t2, operation) {
        switch (operation) {
            case 'add':
                return this.calc.add(t1, t2);
                break;
            case 'sub':
                return this.calc.sub(t1, t2);
                break;
            default:
                return NaN;
        }
    }    
}

const oldCalc = new OldCalc();
console.log(oldCalc.MakeOperations(13,23, 'add'));
const newCalc = new NewCalc();
console.log(newCalc.add(12,34));
const adapter = new CalcAdapter();
console.log(adapter.MakeOperations(123,23,'sub'));