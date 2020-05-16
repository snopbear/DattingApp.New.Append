import { Product } from './product';
import { Injectable } from '@angular/core';
import { RootService } from 'src/app/shared/services/root-services/root.service';
import { tap, catchError, map } from 'rxjs/operators';
import { RxjsValidation } from 'src/app/shared/validation/rxjs-validation/rxjs-validation';

@Injectable({
  providedIn: 'root'
})
export class ProductListFlatGridService {

  url = {
    products: 'product'
  };

  constructor(private rootService: RootService) { }

  products$ = this.rootService
    .getRoot(this.url.products).pipe(
      map(products => products.map(product => ({
        ...product,
        price: product.price * 1.5,
        searchKey: [product.productName]
      }) as Product)),
      tap(data => {
        console.log('Products : ', data);
      }),
      catchError(RxjsValidation.handleError)
    );


}
