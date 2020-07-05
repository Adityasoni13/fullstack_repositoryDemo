import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactqurreyComponent } from './contactqurrey.component';

describe('ContactqurreyComponent', () => {
  let component: ContactqurreyComponent;
  let fixture: ComponentFixture<ContactqurreyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactqurreyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactqurreyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
