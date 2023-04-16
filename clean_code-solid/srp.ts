class Student {
    private name:string;
    private surname:string;
    private score:number;
    constructor (name:string, surname:string, score:number) {
        this.name = name;
        this.surname = surname;
        this.score = score;
    };
    getName():string {
       return this.name;
    }
    getSurname():string {
       return this.surname;
    }
    getScore():number {
       return this.score;
    }
    setName(name: string) {
        this.name=name;
    }
    setSurname(surname: string) {
        this.surname=surname;
    }
    setScore(score:number){
        this.score=score;
    }
}