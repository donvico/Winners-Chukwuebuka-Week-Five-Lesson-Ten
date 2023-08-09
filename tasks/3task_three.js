// Create a dog class and add the following methods: bark, walk, run,wiggleTail, and getAngry. Add the following fields: breed, colour, size, and tail. Instantiate the class to create at least three different breeds. Develop a simple UI for dogs with buttons for bark, run,getAngry, wiggleTail. Add an event listener, on click, call the method to display what the dog is doing to the user.

class Dog {
    constructor(breed, colour, size, tail){
        this.breed = breed
        this.colour = colour
        this.size = size
        this.tail = tail
    }
    bark(){
        return `${this.breed} is barking`;
    }
    walk(){
        return `${this.breed} is walking`;
    }
    run(){
        return `${this.breed} is running`;
    }
    wiggleTail(){
        return `${this.breed} is wiggling tail`;
    }
    getAngry(){
        return `${this.breed} is angry`;
    }
}
const ekuke = new Dog('rottweiler', 'yellow', '40kg', 'yes')
const bingo = new Dog('labrador', 'black', '30kg', 'yes')
const jack = new Dog('chihuahua', 'white', '20kg', 'yes')

const bark = document.getElementById("bark");
const run = document.getElementById("run");
const getAngry = document.getElementById("getangry");
const wiggleTail = document.getElementById("wiggletail");
const statement = document.getElementById("status");


bark.addEventListener("click", () =>content(ekuke.bark()));
run.addEventListener("click", () => content(bingo.run()));
getAngry.addEventListener("click", () => content(jack.getAngry()));
wiggleTail.addEventListener("click", () => content(ekuke.wiggleTail()));


function content (status) {
  statement.innerText = status;
}
content()








