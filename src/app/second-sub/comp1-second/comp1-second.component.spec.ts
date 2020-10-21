import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1SecondComponent } from './comp1-second.component';

describe('Comp1SecondComponent', () => {
  let component: Comp1SecondComponent;
  let fixture: ComponentFixture<Comp1SecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1SecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1SecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
