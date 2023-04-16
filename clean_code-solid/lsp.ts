class Vehicle {
    wheelSize():number {
        return 16; //inch
    }
}

class Car extends Vehicle {
     override wheelSize():number {
        return 19;
     }
} 

class Trunck extends Vehicle {
     override wheelSize():number {
        return 24;
     }
} 