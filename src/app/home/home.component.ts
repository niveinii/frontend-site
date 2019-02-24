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
costSum:number= 0;
numberOfItems:number=0;
addPrice (a:any) {
  if (a.checklist === "Add"){
    this.costSum = a.cost + this.costSum;
    a.checklist = "Remove"
    this.numberOfItems =+ this.numberOfItems + 1;
    a.color = "green";
    console.log(this.costSum);
    console.log(this.numberOfItems);


  }
  else if (a.checklist === "Remove"){
    this.costSum =this.costSum - a.cost ;
    a.checklist = "Add"
    this.numberOfItems =+ this.numberOfItems - 1;
    console.log(this.costSum);
    console.log(this.numberOfItems);

  }


 

}


  constructor() { }


  ngOnInit() {


    
  }

}
