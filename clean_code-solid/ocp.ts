class EngineeringStudent extends Student {
    private maxCredit = 255;
    
    constructor (name:string, surname:string, score:number) {
        super(name,surname,score);
    }
    getMaxCredit():number {
        return this.maxCredit;
    }
}
class MedicalStudent extends Student {
    private maxCredit = 200;
    
    constructor (name:string, surname:string, score: number) {
        super(name,surname,score);
    }
    getMaxCredit():number {
        return this.maxCredit;
    }
}