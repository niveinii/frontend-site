import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  uri: string = 'http://localhost:4000/order'
  constructor(private http: HttpClient) { }

  sendOrder(order) {
    let user = JSON.parse(localStorage.getItem('user'));
    let userID = user.user._id;
    console.log(order);
    return this.http.post(`${this.uri}/add`, {cart : order, userID: userID});
  }
  getOrder(id) {
    return this.http.get(`${this.uri}/${id}`);
  }
}
