import { Component, OnInit } from '@angular/core';
import { products } from '../../Products';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id: number;
  selectedProduct: products;

  constructor(private route: ActivatedRoute, private ps: ProductService) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.id = +data['productID'];
    })
    this.ps.getProducts().forEach(element => {
      console.log(element+"melooooo")
      if (element.productID == this.id)
        this.selectedProduct = element;

    });
  }



}
