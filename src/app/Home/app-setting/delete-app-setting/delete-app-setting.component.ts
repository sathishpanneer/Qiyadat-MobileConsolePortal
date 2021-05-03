import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-app-setting',
  templateUrl: './delete-app-setting.component.html',
  styleUrls: ['./delete-app-setting.component.scss']
})
export class DeleteAppSettingComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteAppSettingComponent>) { }

  ngOnInit() {
  }
  
  cancel() {
    this.dialogRef.close();
  }
}
