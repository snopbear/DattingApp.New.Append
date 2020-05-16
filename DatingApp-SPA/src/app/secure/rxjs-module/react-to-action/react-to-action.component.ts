import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductService } from './product.service';
import { EMPTY, Subject, combineLatest, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CategoryService } from '../combining-streams/category.service';

@Component({
  selector: 'app-react-to-action',
  templateUrl: './react-to-action.component.html',
  styleUrls: ['./react-to-action.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactToActionComponent implements OnInit {

  pageTitle = 'Product List Flat Grid';

  errorMessage = '';

  private categorySelectSubject = new BehaviorSubject<number>(0);

  categorySelectAction$ = this.categorySelectSubject.asObservable();


  constructor(private productService: ProductService, private categoryService: CategoryService) { }

  categories$ = this.categoryService.ProductCategories$.pipe(catchError(err => {
    this.errorMessage = err;
    return EMPTY;
  }));

  products$ = combineLatest([
    this.productService.productsWithCategory$,
    this.categorySelectAction$
  ]).pipe(
    map(([products, selectedCategoryId]) =>
      products.filter(product => selectedCategoryId ? product.categoryId === selectedCategoryId : true)),
    catchError(err => {
      this.errorMessage = err;
      return EMPTY;
    }));


  onSelected(categoryId: string) {
    this.categorySelectSubject.next(+categoryId);
  }
  ngOnInit(): void {
  }


}
