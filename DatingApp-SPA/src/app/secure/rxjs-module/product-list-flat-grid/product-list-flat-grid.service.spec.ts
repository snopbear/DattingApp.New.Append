import { TestBed } from '@angular/core/testing';

import { ProductListFlatGridService } from './product-list-flat-grid.service';

describe('ProductListFlatGridService', () => {
  let service: ProductListFlatGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductListFlatGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
