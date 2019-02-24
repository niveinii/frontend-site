import { Component, OnInit } from '@angular/core';
import {INVENTORYLIST,HEADER} from '../mock-inventory'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
inventory=INVENTORYLIST;
head=HEADER;
searchTerm: string; 
p:number=1;
addPrice () {

}

  constructor() { }


  ngOnInit() {


    
  }

}
