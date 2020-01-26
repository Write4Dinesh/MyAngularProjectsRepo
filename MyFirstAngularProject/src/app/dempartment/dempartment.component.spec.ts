import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DempartmentComponent } from './dempartment.component';

describe('DempartmentComponent', () => {
  let component: DempartmentComponent;
  let fixture: ComponentFixture<DempartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DempartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DempartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
