const car = {
    wheel: 4,
    
    init() {
        console.log(`This car has ${this.wheel} and owner is ${this.owner}`);
    }
};

const myCar = Object.create(car, {
    owner: {
        value: 'Andriy'
    }
});

myCar.init();