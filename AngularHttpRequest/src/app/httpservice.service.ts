import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  apiUrl = 'https://angularhttp-998a3-default-rtdb.firebaseio.com/products.json'; 

  constructor(private http: HttpClient) { }

  onCreateProduct(products :{ pName: string, desc: string, price: string}){
    const headers = new HttpHeaders({'customheader':'Data Post'})
    this.http.post<{name : string}>(this.apiUrl,products,{headers : headers})
    .subscribe();
    // this.fetchProducts();
  }
}
