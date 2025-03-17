import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface OrderItems {
  id : number
  quantity : number ,
  price : number ,
  proudctName: string
}

export interface Order {
  orderId : number , 
  userId : number , 
  totalPrice : number , 
  status : string , 
  orderDate : string , 
  orderItems : OrderItems[] , 
  paymentId : number , 
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://127.0.0.1:8080/api/orders'; // Order API

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }

  getOrder(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/${id}`);
  }

  addOrder(Order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.apiUrl}/add`, Order);
  }

  updateOrder(Order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.apiUrl}/update/${Order.orderId}`, Order);
  }

  cancelOrder(id : number): Observable<Order> {
    return this.http.patch<Order>(`${this.apiUrl}/cancel/${id}` , {});
  }

  deleteOrder(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }


}
