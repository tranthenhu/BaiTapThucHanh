import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailConGiapComponent } from './detail-con-giap.component';

describe('DetailConGiapComponent', () => {
  let component: DetailConGiapComponent;
  let fixture: ComponentFixture<DetailConGiapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailConGiapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailConGiapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
