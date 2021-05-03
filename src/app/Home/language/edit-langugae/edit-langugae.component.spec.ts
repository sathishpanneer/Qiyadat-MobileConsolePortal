import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLangugaeComponent } from './edit-langugae.component';

describe('EditLangugaeComponent', () => {
  let component: EditLangugaeComponent;
  let fixture: ComponentFixture<EditLangugaeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLangugaeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLangugaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
