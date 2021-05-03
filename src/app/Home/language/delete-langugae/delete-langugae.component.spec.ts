import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLangugaeComponent } from './delete-langugae.component';

describe('DeleteLangugaeComponent', () => {
  let component: DeleteLangugaeComponent;
  let fixture: ComponentFixture<DeleteLangugaeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteLangugaeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLangugaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
