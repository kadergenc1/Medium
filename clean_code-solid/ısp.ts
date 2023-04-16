interface IVehicle {
    wheelSize():number;
    trailer():number;
}

class Car implements IVehicle {
     wheelSize():number {
        return 19;
     }
} 

class Trunck implements IVehicle {
     wheelSize():number {
        return 24;
     }
}

interface ICar {
    wheelSize():number;
}

interface ITruck {
    wheelSize():number;
    trailer():number;
}

class Car implements ICar {
     wheelSize():number {
        return 19; //inch
     }
} 

class Trunck implements ITruck {
    wheelSize():number {
        return 24; //inch
    }

    trailer():number {
        return 4.408; //lbs
    }
}