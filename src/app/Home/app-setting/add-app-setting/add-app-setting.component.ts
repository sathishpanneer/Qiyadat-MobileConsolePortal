import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import { appSetting } from '../app-setting.component';

@Component({
  selector: 'app-add-app-setting',
  templateUrl: './add-app-setting.component.html',
  styleUrls: ['./add-app-setting.component.scss']
})
export class AddAppSettingComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data : appSetting,
    public dialogRef: MatDialogRef<AddAppSettingComponent>,
    private snackBar: MatSnackBar
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

  cancel(){
    this.dialogRef.close();
  }

}
