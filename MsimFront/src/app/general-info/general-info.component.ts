import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.css']
})
export class GeneralInfoComponent implements OnInit {
private hijriDateInfo;
private gregorianDateInfo ;
public hijriInfo ;
public currentDate ;
  constructor(public rest:RestService) { }

  ngOnInit() {
    this.currentDate =  new Date();
    this.getDateInformation();
  }

  getDateInformation() {
    this.rest.getDateInformation().subscribe((data: {}) => {
      this.hijriDateInfo = data['hijri'] ;
      this.gregorianDateInfo = data['gregorian'] ;
      this.hijriInfo = this.hijriDateInfo['weekday']['ar'] + " "+ this.hijriDateInfo["day"] +" "+ this.hijriDateInfo['month']['ar'] +" "+ this.hijriDateInfo['year']; 
      console.log(this.hijriDateInfo);
      console.log(this.gregorianDateInfo);
    });
  }

}
