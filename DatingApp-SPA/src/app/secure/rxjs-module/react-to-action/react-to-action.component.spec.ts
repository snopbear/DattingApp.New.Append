import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactToActionComponent } from './react-to-action.component';

describe('ReactToActionComponent', () => {
  let component: ReactToActionComponent;
  let fixture: ComponentFixture<ReactToActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactToActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactToActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
