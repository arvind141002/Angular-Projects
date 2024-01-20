import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Product } from './model/products';
import { HttpserviceService } from './httpservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'AngularHttpRequest';
  apiUrl = 'https://angularhttp-998a3-default-rtdb.firebaseio.com/products.json';
  allProducts: Product[] = [];

  constructor(private http: HttpClient, private dbservice: HttpserviceService ){

  }

  ngOnInit(): void {
    this.fetchProducts();
  }

  onProductFetch(){
    this.fetchProducts();
  }

  onProductCreate(products :{ pName: string, desc: string, price: string}){
    this.dbservice.onCreateProduct(products);
  }

  private fetchProducts(){
    this.http.get<{[key:string]:Product}>(this.apiUrl)
    .pipe(map((res)=>{
      const products = [];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          products.push({...res[key], id:key})
        }
      }
      return products
    }))
    .subscribe((products)=>
    {
      console.log(products);
      this.allProducts = products;
    });
  }
}
