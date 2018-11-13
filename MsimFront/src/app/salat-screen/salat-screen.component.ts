import { Component, OnInit } from '@angular/core';
import {SalatModel} from '../model/SalatModel';
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
  constructor(){
    
  }
  ngOnInit() {
    this.sobah =  new SalatModel(6,18,"sbh",15) ;
    this.dohir =  new SalatModel(23,36,"dhr",15) ;
    this.assir =  new SalatModel(14,44,"asr",15) ;
    this.magurib =  new SalatModel(17,11,"mgb",15) ;
    this.iicha =  new SalatModel(18,21,"ich",15) ;
  }



}
