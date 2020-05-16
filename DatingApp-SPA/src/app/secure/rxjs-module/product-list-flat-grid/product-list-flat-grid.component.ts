import { catchError } from 'rxjs/operators';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductListFlatGridService } from './product-list-flat-grid.service';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-product-list-flat-grid',
  templateUrl: './product-list-flat-grid.component.html',
  styleUrls: ['./product-list-flat-grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListFlatGridComponent {

  pageTitle = 'Product List Flat Grid';

  errorMessage = '';
  constructor(private productListFlatGridService: ProductListFlatGridService) { }
  products$ = this.productListFlatGridService.products$.pipe(catchError(err => {
    this.errorMessage = err;
    return EMPTY;
  }));



}
