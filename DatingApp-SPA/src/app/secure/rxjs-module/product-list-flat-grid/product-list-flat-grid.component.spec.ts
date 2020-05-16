import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListFlatGridComponent } from './product-list-flat-grid.component';

describe('ProductListFlatGridComponent', () => {
  let component: ProductListFlatGridComponent;
  let fixture: ComponentFixture<ProductListFlatGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListFlatGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListFlatGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
