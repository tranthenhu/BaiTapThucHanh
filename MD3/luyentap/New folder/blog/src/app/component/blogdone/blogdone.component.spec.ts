import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogdoneComponent } from './blogdone.component';

describe('BlogdoneComponent', () => {
  let component: BlogdoneComponent;
  let fixture: ComponentFixture<BlogdoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogdoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogdoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
