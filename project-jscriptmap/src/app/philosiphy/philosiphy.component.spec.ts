import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhilosiphyComponent } from './philosiphy.component';

describe('PhilosiphyComponent', () => {
  let component: PhilosiphyComponent;
  let fixture: ComponentFixture<PhilosiphyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhilosiphyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhilosiphyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
