import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdowntimeraliasComponent } from './countdowntimeralias.component';

describe('CountdowntimeraliasComponent', () => {
  let component: CountdowntimeraliasComponent;
  let fixture: ComponentFixture<CountdowntimeraliasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdowntimeraliasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdowntimeraliasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
