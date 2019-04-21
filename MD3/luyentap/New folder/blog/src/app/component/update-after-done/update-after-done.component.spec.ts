import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAfterDoneComponent } from './update-after-done.component';

describe('UpdateAfterDoneComponent', () => {
  let component: UpdateAfterDoneComponent;
  let fixture: ComponentFixture<UpdateAfterDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAfterDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAfterDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
