import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvParsingComponent } from './cv-parsing.component';

describe('CvParsingComponent', () => {
  let component: CvParsingComponent;
  let fixture: ComponentFixture<CvParsingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvParsingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvParsingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
