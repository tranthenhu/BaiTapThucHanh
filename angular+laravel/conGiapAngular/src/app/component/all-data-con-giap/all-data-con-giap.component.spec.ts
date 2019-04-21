import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDataConGiapComponent } from './all-data-con-giap.component';

describe('AllDataConGiapComponent', () => {
  let component: AllDataConGiapComponent;
  let fixture: ComponentFixture<AllDataConGiapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDataConGiapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDataConGiapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
