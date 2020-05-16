import { Category } from './category';
import { Injectable } from '@angular/core';
import { RootService } from 'src/app/shared/services/root-services/root.service';
import { tap, catchError, shareReplay } from 'rxjs/operators';
import { RxjsValidation } from 'src/app/shared/validation/rxjs-validation/rxjs-validation';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url = {
    productCategory: 'productCategory'
  };

  constructor(private rootService: RootService) { }

  ProductCategories$ = this.rootService
    .getRoot(this.url.productCategory).pipe(
      tap(data => {
        console.log('Products : ', data);
      }),
      shareReplay(1),
      catchError(RxjsValidation.handleError)
    );
}
