// Create a class of phones, using your intuition, add at least the core five features of a phone as the core class fields. Instantiate the phone class to create different types of phones at least three.

class Phones {
    constructor(model, chargingPort, screenType, fingerprint, faceId){
        this.model = model;
        this.chargingPort = chargingPort;
        this.screenType = screenType;
        this.fingerprint = fingerprint;
        this.faceId = faceId
    }
}
const samsung = new Phones(2908, 'typeC', 'amoled', 'yes', 'yes')
const iphone = new Phones(3008, 'USB', 'LED', 'yes', 'NO')
const techno = new Phones('x-series', 'typeC', 'amoled', 'yes', 'no')
console.log(samsung, iphone, techno);