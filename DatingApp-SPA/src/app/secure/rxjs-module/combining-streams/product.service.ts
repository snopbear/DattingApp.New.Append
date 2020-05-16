
import { Injectable } from '@angular/core';

import { BehaviorSubject, combineLatest, EMPTY, from, merge, Subject, throwError, of } from 'rxjs';
import { catchError, filter, map, mergeMap, scan, shareReplay, tap, toArray, switchMap } from 'rxjs/operators';

import { RootService } from 'src/app/shared/services/root-services/root.service';
import { RxjsValidation } from 'src/app/shared/validation/rxjs-validation/rxjs-validation';
import { CategoryService } from './category.service';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = {
    products: 'product'
  };

  constructor(private rootService: RootService , private categoryService: CategoryService) { }

  products$ = this.rootService
    .getRoot(this.url.products).pipe(
      tap(data => {
        console.log('Products : ', data);
      }),
      catchError(RxjsValidation.handleError)
    );



// Combine products with categories
  // Map to the revised shape.
  productsWithCategory$ = combineLatest([
    this.products$,
    this.categoryService.ProductCategories$
  ]).pipe(
    map(([products, categories]) =>
      products.map(product => ({
        ...product,
        price: product.price * 1.5,
        category: categories.find(c => product.categoryId === c.id).name,
        searchKey: [product.productName]
      }) as Product)
    )
  );
}
