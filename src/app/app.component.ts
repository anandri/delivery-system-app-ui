import { Component, OnInit } from '@angular/core';
import { MasterServiceService } from './service/master-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'online-delivery';
  productList;
  constructor(private masterServiceService: MasterServiceService) { }
  ngOnInit(): void {
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
    const unitPrice = product.priceList.find(item=>item._id == event.target.value);
    product.currentPrice = unitPrice.price;
   
  }

}
