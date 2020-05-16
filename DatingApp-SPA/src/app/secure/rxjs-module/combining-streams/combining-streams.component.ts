import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductService } from './product.service';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-combining-streams',
  templateUrl: './combining-streams.component.html',
  styleUrls: ['./combining-streams.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CombiningStreamsComponent implements OnInit {

  pageTitle = 'Product List Flat Grid';

  errorMessage = '';
  constructor(private productService: ProductService) { }
  products$ = this.productService.productsWithCategory$.pipe(catchError(err => {
    this.errorMessage = err;
    return EMPTY;
  }));

  ngOnInit(): void {
  }


}
