import { Component, OnInit } from '@angular/core';
import {SalatModel} from '../model/SalatModel';
import { RestService } from '../rest.service';
@Component({
  selector: 'app-salat-screen',
  templateUrl: './salat-screen.component.html',
  styleUrls: ['./salat-screen.component.css']
})
export class SalatScreenComponent implements OnInit {
  public sobah : SalatModel;
  public dohir : SalatModel;
  public assir : SalatModel;
  public magurib : SalatModel;
  public iicha : SalatModel;
  public listeSalatEnable = true ;
  constructor(public rest:RestService){
  }
  ngOnInit() {
    this.rest.getSalatInformation().subscribe((data: {}) => {
      console.log(data);
    this.sobah    =  new SalatModel(data['Fajr'].split(":", 2)[0],data['Fajr'].split(":", 2)[1],"sbh",15) ;
    this.dohir    =  new SalatModel(data['Dhuhr'].split(":", 2)[0],data['Dhuhr'].split(":", 2)[1],"dhr",15) ;
    this.assir    =  new SalatModel(data['Asr'].split(":", 2)[0],data['Fajr'].split(":", 2)[1],"asr",15) ;
    this.magurib  =  new SalatModel(data['Maghrib'].split(":", 2)[0],data['Maghrib'].split(":", 2)[1],"mgb",15) ;
    this.iicha    =  new SalatModel(data['Isha'].split(":", 2)[0],data['Isha'].split(":", 2)[1],"ich",15) ;
    });
  }



}
