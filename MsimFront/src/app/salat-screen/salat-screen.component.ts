import { Component, OnInit } from '@angular/core';
import {SalatModel} from '../model/SalatModel';
@Component({
  selector: 'app-salat-screen',
  templateUrl: './salat-screen.component.html',
  styleUrls: ['./salat-screen.component.css']
})
export class SalatScreenComponent implements OnInit {
  public dohir : SalatModel;
  constructor(){
    
  }
  ngOnInit() {
    this.dohir =  new SalatModel(12,30,"DHR",15) ;
  }

}
