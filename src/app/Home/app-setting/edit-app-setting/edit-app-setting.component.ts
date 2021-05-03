import { Component, Inject, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { appSetting } from '../app-setting.component';

@Component({
  selector: 'app-edit-app-setting',
  templateUrl: './edit-app-setting.component.html',
  styleUrls: ['./edit-app-setting.component.scss']
})
export class EditAppSettingComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: appSetting,
    public dialogRef: MatDialogRef<EditAppSettingComponent>
  ) { }

  ngOnInit() {
    
  }

  formControl = new FormControl('', [
    Validators.required
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      '';
  }

  cancel() {
    this.dialogRef.close();
  }
}
