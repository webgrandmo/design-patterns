class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
}

class CarsFactory {
    constructor() {
        this.cars = [];

    }
    create(model, price) {
        const candidate = this.getCar(model);
        if(candidate) {
            return candidate;
        }
        const newCar = new Car(model, price);
        this.cars.push(newCar);
        return newCar;
    }
    getCar(model) {
        return this.cars.find( car => car.model === model );
    }   
}

const factory = new CarsFactory();

const bmwX6 = factory.create('bmw', 100000);
console.log(bmwX6);


const audiQ5= factory.create('audi', 130000);
console.log(audiQ5);

const bmwX3 = factory.create('bmw', 800000);
console.log(bmwX3);
