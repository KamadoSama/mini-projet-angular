import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidenceEditComponent } from './residence-edit.component';

describe('ResidenceEditComponent', () => {
  let component: ResidenceEditComponent;
  let fixture: ComponentFixture<ResidenceEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResidenceEditComponent]
    });
    fixture = TestBed.createComponent(ResidenceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
