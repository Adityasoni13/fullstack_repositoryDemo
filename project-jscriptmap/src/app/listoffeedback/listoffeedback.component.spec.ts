import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListoffeedbackComponent } from './listoffeedback.component';

describe('ListoffeedbackComponent', () => {
  let component: ListoffeedbackComponent;
  let fixture: ComponentFixture<ListoffeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListoffeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListoffeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
