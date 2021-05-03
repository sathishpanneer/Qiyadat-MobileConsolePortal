import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-langugae',
  templateUrl: './delete-langugae.component.html',
  styleUrls: ['./delete-langugae.component.scss']
})
export class DeleteLangugaeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteLangugaeComponent>) { }

  ngOnInit() {
    
  }
  
  cancel() {
    this.dialogRef.close();
  }
}
