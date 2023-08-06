
// // Write something
// Create a class of car with the following fields: numSeats, numbHeadLamps, fuelTankMaxLitre, numbExhaustPipe, convertible(boolean), numbOfDoors, numbOfEnginePlug(default to 4). Instantiate the class to create different types of cars using your car class(at least for).

class Car {
    constructor(numSeats, numbHeadLamps, fuelTankMaxLitre, numbExhaustPipe, convertible, numbOfDoors, numbOfEnginePlug = 4,){

        this.numSeats = numSeats;
        this.numbHeadLamps = numbHeadLamps;
        this.fuelTankMaxLitre = fuelTankMaxLitre;
        this.numbExhaustPipe = numbExhaustPipe;
        this.convertible = convertible;
        this.numbOfDoors = numbOfDoors;
        this.numbOfEnginePlug = numbOfEnginePlug
    }
}

const volvo = new Car(4,5,'20liters',4,true,4)
const mazda = new Car(5,4,'40liters',3,false,2)
const benz = new Car(1,3,'20liters',4,true,4)
const camry = new Car(2,6,'30liters',2,true,3)

console.log(volvo, mazda, benz, camry);