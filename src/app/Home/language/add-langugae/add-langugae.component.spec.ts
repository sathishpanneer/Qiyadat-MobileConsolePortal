import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLangugaeComponent } from './add-langugae.component';

describe('AddLangugaeComponent', () => {
  let component: AddLangugaeComponent;
  let fixture: ComponentFixture<AddLangugaeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLangugaeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLangugaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
