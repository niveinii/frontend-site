import { Component, OnInit } from '@angular/core';
import { INVENTORYLIST, HEADER } from '../mock-inventory'
import { isNgTemplate } from '@angular/compiler';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  inventory = INVENTORYLIST;
  head = HEADER;
  searchTerm: string;
  p: number = 1;
  costSum: number = 0;
  numberOfItems: number = 0;
  currentInput: number;

  valueToNumber(a: any) {
    this.currentInput = parseFloat(a.value);
  }

  addPrice(a: any) {
    if (a.checklist === "Add" && this.currentInput>=0) {
      this.costSum = (a.cost * this.currentInput) + this.costSum;
      a.checklist = "Remove";
      this.numberOfItems = + this.numberOfItems + this.currentInput;
      a.quantity = a.quantity + this.currentInput;

    }
    else if (a.checklist === "Remove" && a.quantity >= this.currentInput && this.currentInput>=0) {
      this.costSum = this.costSum - (a.cost * this.currentInput);
      a.checklist = "Add"
      this.numberOfItems = + this.numberOfItems - this.currentInput;
      a.quantity = a.quantity - this.currentInput;
    }




  }


  constructor() { }


  ngOnInit() {



  }

}
