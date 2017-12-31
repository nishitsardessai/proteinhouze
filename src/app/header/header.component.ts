import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { products } from '../../Products';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  productArray: products[];

  constructor(private ps:ProductService) { 
    this.productArray=ps.getProducts();
    console.log("hellooo"+this.productArray)
  }

  ngOnInit() {
  }

}
