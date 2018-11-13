import { Component, OnInit, Input } from '@angular/core';
import { toDate } from '@angular/common/src/i18n/format_date';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.css']
})
export class AnalogClockComponent implements OnInit {
  public transformHour;
  public transformMin;
  public transformSec;
  @Input ("displaySec") public displaySec = false ;
  private date ;
  @Input ("seconds") public seconds = new Date().getSeconds();
  @Input ("hours") public hours = new Date().getHours();
  backgroundClock: string;
  private day;
  @Input("minutes") public  minutes = new Date().getMinutes();
  private alarmDuration = 5 ; // 5 minutes
  private secAngle;
  private minAngle;
  private hourAngle;
  @Input("waitingTime") public waitingTime;
  constructor() { }
  ngOnInit() {
   
    this.initClock();
   
      setInterval(() => { 
        this.date = new Date() ;
        if(this.displaySec){
        this.updateClock();  
        } else {
          this.checkStated();
        }      
      }, 1000);
  
  }
  checkStated(): any {
    if( this.hours == this.date.getHours() && (this.minutes <= this.date.getMinutes() && this.date.getMinutes() <= this.alarmDuration + this.minutes)){
      console.log("result :" +this.date.getSeconds());
      
      if(this.date.getSeconds() % 2 == 0){
        this.backgroundClock = '#ececec' ;
      } else {
        this.backgroundClock = '#D6E3C1' ;
      }
    }else {
      this.backgroundClock = '#ececec';
    }
  }
  updateClock() {
    this.seconds = this.date.getSeconds();
    this.minutes = this.date.getMinutes();
    this.hours   = this.date.getHours();
    this.secAngle= this.seconds * 6;
    this.initClock();

  }
  initClock(): any {
    this.minAngle = this.minutes * 6 + this.seconds * (360/3600);
    this.hourAngle = this.hours * 30 + this.minutes * (360/720);

    this.transformHour = 'rotate(' + this.hourAngle + 'deg)' ;

    this.transformMin = 'rotate(' + this.minAngle + 'deg)' ;
    this.transformSec = 'rotate(' + this.secAngle + 'deg)' ;
  }
}
