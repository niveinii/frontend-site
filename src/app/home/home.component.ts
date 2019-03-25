import { Component, OnInit } from '@angular/core';
import { INVENTORYLIST, HEADER } from '../mock-inventory';


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
  itemStorage = (sessionStorage.getItem("numOfItems") ? sessionStorage.getItem("numOfItems") : sessionStorage.setItem("numOfItems","0"));
  costStorage = (sessionStorage.getItem("cost") ? sessionStorage.getItem("cost") : sessionStorage.setItem("cost","0"));


  valueToNumber(a: any) {
    this.currentInput = parseFloat(a.value);
  }

  addPrice(a: any) {
    if (a.checklist === "Add To Cart" && this.currentInput>=0) {
      this.costSum = (a.cost * this.currentInput) + parseInt(sessionStorage.getItem("cost"));
      this.costStorage = sessionStorage.setItem("cost",this.costSum.toString());
      this.costStorage = sessionStorage.getItem("cost");
      a.checklist = "Remove Item";
      this.numberOfItems = parseInt(sessionStorage.getItem("numOfItems")) + this.currentInput;
      this.itemStorage = sessionStorage.setItem("numOfItems",this.numberOfItems.toString());
      this.itemStorage = sessionStorage.getItem("numOfItems");
      a.quantity = a.quantity + this.currentInput;

    }
    else if (a.checklist === "Remove Item" && a.quantity >= this.currentInput && this.currentInput>=0) {
      this.costSum = parseInt(sessionStorage.getItem("cost")) - (a.cost * this.currentInput);
      this.costStorage =sessionStorage.setItem("cost",this.costSum.toString());
      this.costStorage = sessionStorage.getItem("cost");
      a.checklist = "Add To Cart"
      this.numberOfItems = parseInt(sessionStorage.getItem("numOfItems")) - this.currentInput;
      this.itemStorage = sessionStorage.setItem("numOfItems",this.numberOfItems.toString());
      this.itemStorage = sessionStorage.getItem("numOfItems");
      a.quantity = a.quantity - this.currentInput;
    }




  }


  constructor() { }


  ngOnInit() {



  }

}
