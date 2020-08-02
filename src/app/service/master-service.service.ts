import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {

  constructor(private http: HttpClient) { }

  getProductList() {
    return this.http.get(`${environment.applicationURL}users/products/product-list`);
  }

}
