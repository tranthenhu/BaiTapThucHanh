import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesCompleteComponent } from './courses-complete.component';

describe('CoursesCompleteComponent', () => {
  let component: CoursesCompleteComponent;
  let fixture: ComponentFixture<CoursesCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
