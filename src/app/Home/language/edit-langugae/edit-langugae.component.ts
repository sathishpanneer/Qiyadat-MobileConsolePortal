import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import { localization } from '../language.component';

@Component({
  selector: 'app-edit-langugae',
  templateUrl: './edit-langugae.component.html',
  styleUrls: ['./edit-langugae.component.scss']
})
export class EditLangugaeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditLangugaeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

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
