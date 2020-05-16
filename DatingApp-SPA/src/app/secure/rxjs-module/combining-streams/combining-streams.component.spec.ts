import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombiningStreamsComponent } from './combining-streams.component';

describe('CombiningStreamsComponent', () => {
  let component: CombiningStreamsComponent;
  let fixture: ComponentFixture<CombiningStreamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombiningStreamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombiningStreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
