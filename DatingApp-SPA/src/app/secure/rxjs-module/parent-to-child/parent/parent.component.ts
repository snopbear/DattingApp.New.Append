import { ProductService } from './../product.service';
import { Product } from './../product';

import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { Subscription, EMPTY, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent {

  pageTitle = 'Parent';

  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();




  constructor(private productService: ProductService) { }

  selectedProduct$ = this.productService.selectedProduct$;

  products$ = this.productService.productsWithCategory$.pipe(catchError(err => {
    this.errorMessageSubject.next(err);
    return EMPTY;
  }));

  onSelected(productId: number): void {
    this.productService.selectedProductChanged(productId);
  }

}
