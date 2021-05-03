import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAppSettingComponent } from './delete-app-setting.component';

describe('DeleteAppSettingComponent', () => {
  let component: DeleteAppSettingComponent;
  let fixture: ComponentFixture<DeleteAppSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAppSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAppSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
