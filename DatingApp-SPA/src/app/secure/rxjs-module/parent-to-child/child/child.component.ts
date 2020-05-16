import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductService } from './../product.service';
import { catchError } from 'rxjs/operators';
import { Subscription, EMPTY, Subject } from 'rxjs';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  pageTitle = 'Child';

  
  private errorMessageSubject = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();

  constructor(private productService: ProductService) { }
  product$ = this.productService.selectedProduct$.pipe(catchError(err => {
    this.errorMessageSubject.next(err);
    return EMPTY;
  }));


  ngOnInit(): void {
  }

}
