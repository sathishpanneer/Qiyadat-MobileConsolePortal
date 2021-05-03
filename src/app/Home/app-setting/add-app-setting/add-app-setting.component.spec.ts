import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppSettingComponent } from './add-app-setting.component';

describe('AddAppSettingComponent', () => {
  let component: AddAppSettingComponent;
  let fixture: ComponentFixture<AddAppSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAppSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAppSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
