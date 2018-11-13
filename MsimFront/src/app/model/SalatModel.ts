
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
  
    public getArabName() : String{
        var result = "";
        switch(this.salatName) { 
            case "sbh": { 
                result = 'الصبح'
               break; 
            } 
            case "dhr": { 
                result = 'الظهر'
               break; 
            } 
            case "asr": {
                result = 'العصر' 
               break;    
            } 
            case "mgb": { 
                result = 'المغرب'
               break; 
            }  
            case "ich": { 
                result = 'العشاء'
                break; 
             }  
            default: { 
               break;              
            } 
         }
         return result ;
    }

    public getFrName() : String{
        var result = "";
        switch(this.salatName) { 
            case "sbh": { 
                result = 'Sobah'
               break; 
            } 
            case "dhr": { 
                result = 'Dohir'
               break; 
            } 
            case "asr": {
                result = 'Assir' 
               break;    
            } 
            case "mgb": { 
                result = 'Mogurib' 
               break; 
            }  
            case "ich": { 
                result = 'Icha'
                break; 
             }  
            default: { 
               break;              
            } 
         }
         return result ;
    }
    
}