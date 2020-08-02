import { Component, OnInit } from '@angular/core';
import { MasterServiceService } from '../service/master-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList;
  orderList = [];
  constructor(private masterServiceService: MasterServiceService) { }

  ngOnInit() {
    this.getProductList();
  }
  getProductList() {
    this.masterServiceService.getProductList().subscribe(
      data => {
        this.productList = data;
      }
    );
  }
  changeUnit(product, event) {
    console.log(event.target.value);
    const unitPrice = product.priceList.find(item => item._id == event.target.value);
    product.currentPrice = unitPrice.price;

  }
  addToCart(data) {
    this.orderList.push(data);
    console.log(this.orderList)
  }
}
