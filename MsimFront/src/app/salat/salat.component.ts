import { Component, OnInit, Input } from '@angular/core';
import {SalatModel} from '../model/SalatModel';

@Component({
  selector: 'app-salat',
  templateUrl: './salat.component.html',
  styleUrls: ['./salat.component.css']
})
export class SalatComponent implements OnInit {
@Input("salatModel") public salatModel : any;
public  salatTime ;
public  salatPrayTime;


  constructor() { 

     }



  ngOnInit() {
    this.salatTime = new Date(2018,1,1,this.salatModel.hour,this.salatModel.minutes);
    this.salatPrayTime = new Date(2018,1,1,this.salatModel.hour,this.salatModel.minutes);
    this.salatPrayTime.setMinutes(this.salatTime.getMinutes() + this.salatModel.waitingTime);

  }

}
