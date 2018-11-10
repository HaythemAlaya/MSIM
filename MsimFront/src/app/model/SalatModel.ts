
export  class  SalatModel{
    public hour :  number;
    public minutes : number;
    public salatName : string;
    public waitingTime : number ;
    
    constructor(hour : number, minutes : number, salatName : string, waitingTime : number){
        this.hour = hour;
        this.minutes = minutes;
        this.salatName = salatName;
        this.waitingTime = waitingTime;
    }
}