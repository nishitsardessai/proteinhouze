import { Injectable } from '@angular/core';
import { products } from '../Products';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ProductService {
productsArray:Array<products>= new Array();
p:products;
  constructor() { 
    this.productsArray.push(new products(101, "ON Whey", "Whey Protein", "Optimum Nutrition", "5Lbs", 6500));
    this.productsArray.push(new products(106, "Dymatize Whey", "Whey Protein", "Optimum Nutrition", "5Lbs", 6500));
    this.productsArray.push(new products(103, "Proburst Whey", "Whey Protein", "Proburst", "5Lbs", 6500));
    this.productsArray.push(new products(107, "ON Mass Gainer", "Whey Protein", "Optimum Nutrition", "5Lbs", 6500));
    this.productsArray.push(new products(103, "ON Whey", "Whey Protein", "Optimum Nutrition", "5Lbs", 6500));
    console.log(this.productsArray+"in sevice")
  }

 getProducts():Array<products>{
    return this.productsArray;      
  }

}
