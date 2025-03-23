// function Car (make , speed){
//     this.make = make ;
//     this.speed = speed ;

// }

// Car.prototype.accelerate = function() {
//     this.speed += 10;
//     console.log(` the spees is now ${this.speed} km/h`)
    

// };
// Car.prototype.brake = function(){
//     this.speed -= 5 ;
//     console.log(` the speed is now ${this.speed}`);
    
// };
// const car1 = new Car ('bbm' ,120);
// const car2 = new Car('Mercedes',95);
// car1.accelerate();
// car1.brake();

// ::;;;;;;;;;with class//////////////////////////////////

class Car {
    constructor(make , speed){
        this.make = make ;
        this.speed = speed ;
    }
    accelerate(){
        this.speed += 10 ;
        console.log(`the speed now is ${this.speed}`);
        
    }
    brake(){
        this.speed -= 5 ;
        console.log(`the speed now is ${this.speed}`);
        
    }
};
 
const car1 = new Car('bbm',120);
car1.accelerate() ;
car1.brake();
const car2 = new Car('Mercedes',95)
car2.accelerate();
car2.brake();
