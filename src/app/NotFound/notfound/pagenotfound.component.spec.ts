import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotfoundComponent } from './pagenotfound.component';

describe('NotfoundComponent', () => {
  let component: PageNotfoundComponent;
  let fixture: ComponentFixture<PageNotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
