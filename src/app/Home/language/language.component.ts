import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog , MatDialogConfig, MatDialogRef, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import { LanguageService } from 'src/app/Service/language.service';
import { AddLangugaeComponent } from './add-langugae/add-langugae.component';
import { DeleteLangugaeComponent } from './delete-langugae/delete-langugae.component';
import { EditLangugaeComponent } from './edit-langugae/edit-langugae.component';

export interface localization {
  id: number,
  pagename: string;
  PageDisplayname: string;
  Labelname: string;
  Value: string;
  Language_Code: string;
  isActive: number;
  CreatedBy: string;
  CreatedDate: Date;
  UpdatedBy: string;
  UpdatedDate: Date;
}

export interface pageModel {
  PageName: number,
  PageDisplayName: string;
  LabelName: string;
  English: string;
  Arabic: string;
}

// export interface pageModel {
//   pageName: string,
//   fromDate: Date
// }

// const pageData: pageModel = {
//   pageName : "ALL", fromDate : new Date("2020-09-01")
// }

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})


export class LanguageComponent implements OnInit {

  //displayedColumns = ['key', 'value', 'actions'];
  displayedColumns = ['pageDisplayName' ,'labelName', 'languageCode', 'key', 'value', 'actions'];
  dataSource: any;
  progressCompleted:boolean = false;

  @ViewChild(MatPaginator, {static : false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static : false}) sort: MatSort;
  constructor(public dialog: MatDialog, private localizationService: LanguageService, private snakBar: MatSnackBar) { }

  ngOnInit() {
    this.getAllLocalization();
  }

  getAllLocalization() {
    this.localizationService.getAllLocalization().subscribe((data: localization[]) => {
      if (data) {
        this.dataSource = new MatTableDataSource<localization>(data);
        this.dataSource.paginator = this.paginator;
        this.progressCompleted = true;
        this.dataSource.sort = this.sort;
      }
    });
  }

  AddLocalization() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {};

    const dialogRef = this.dialog.open(AddLangugaeComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res => {
      if(res == 1){
          this.localizationService.createLocalization(dialogConfig.data).subscribe(res => {
            if(res){
              this.snakBar.open("Localization added successfully !!", "Done", {
                duration: 2000,
                verticalPosition: 'top',
                panelClass: ['snack-bar']
              });
                this.getAllLocalization();
            }else{
              this.snakBar.open("Failed !!", "", {
                duration: 2000,
                verticalPosition: 'top',
                panelClass: ['snack-bar']
              });
            }
          })
      }
    });
  }

  EditLocalization(row: any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = row;

    const dialogRef = this.dialog.open(EditLangugaeComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res => {
      if(res == 1){
        console.log(dialogConfig.data);
          this.localizationService.updateLocalization(dialogConfig.data).subscribe(res => {
            if(res){
              this.snakBar.open("Localization updated successfully !!", "Done", {
                duration: 3000,
                verticalPosition: 'top',
                panelClass: ['snack-bar']
              });
              this.getAllLocalization();
            } else{
              this.snakBar.open("Failed !!", "", {
                duration: 3000,
                verticalPosition: 'top',
                panelClass: ['snack-bar']
              });
            }
          });
      }else{
        this.getAllLocalization();
      }
    });
  }
  
  DeleteLocalization(id: number){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = id;

    const dialogRef = this.dialog.open(DeleteLangugaeComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res => {
      if(res == 1){
          this.localizationService.deleteLocalization(dialogConfig.data).subscribe(res => {
            if(res){
              this.snakBar.open("Localization deleted successfully !!", "Done", {
                duration: 3000,
                verticalPosition: 'top',
                panelClass: ['snack-bar']
              });

              this.getAllLocalization();
            } else{
              this.snakBar.open("Failed !!", "", {
                duration: 3000,
                verticalPosition: 'top',
                panelClass: ['snack-bar']
              });
            }
          })
      }
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  addNew() {
    const dialogRef = this.dialog.open(AddLangugaeComponent, {
      //data: {issue: Issue }
      

    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataService
        //this.exampleDatabase.dataChange.value.push(this.dataService.getDialogData());
        //this.refreshTable();
      }
    });
  }

  startEdit() {
    const dialogRef = this.dialog.open(EditLangugaeComponent, {
      //data: {issue: Issue }
      

    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataService
        //this.exampleDatabase.dataChange.value.push(this.dataService.getDialogData());
        //this.refreshTable();
      }
    });
  }

  deleteItem() {
    const dialogRef = this.dialog.open(DeleteLangugaeComponent, {
      //data: {id: id, title: title, state: state, url: url}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
       // const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
        // for delete we use splice in order to remove single object from DataService
        //this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
       // this.refreshTable();
      }
    });
  }
}
export interface PeriodicElement {
  pageName: string;
  labelName: string;
  languageCode: string;
  key: string;
  value: string
}

// const ELEMENT_DATA: PeriodicElement[] = [
// {pageName: 'accountDescription', labelName: 'search', languageCode: 'en', key: 'accountDescription_search_en', value: 'Search'},
// {pageName: 'accountDescription', labelName: 'search', languageCode: 'ar', key: 'accountDescription_search_ar', value: 'بحث'},
// {pageName: 'accountDescription', labelName: 'meetingHub', languageCode: 'en', key: 'accountDescription_meetingHub_en', value: 'Meeting Hub'},
// {pageName: 'achievement', labelName: 'meetingHub', languageCode: 'en', key: 'accountDescription_meetingHub_ar', value: 'ملتقى الاجتماعات'},
// {pageName: 'achievement', labelName: 'youHave', languageCode: 'en', key: 'achievement_youHave_en', value: 'You'},
// {pageName: 'achievement', labelName: 'youHave', languageCode: 'en', key: 'achievement_youHave_ar', value: 'أنت'},
// {pageName: 'achievement', labelName: 'role', languageCode: 'en', key: 'achievement_role_en', value: 'Role'},
// {pageName: 'achievement', labelName: 'role', languageCode: 'en', key: 'achievement_role_ar', value: 'المهام'},
// {pageName: 'achievement', labelName: 'impactOn', languageCode: 'en', key: 'achievement_impactOn_en', value: 'Impact on'},
// {pageName: 'achievement', labelName: 'impactOn', languageCode: 'en', key: 'achievement_impactOn_ar', value: 'الأثر على'},
// {pageName: 'achievement', labelName: 'impactOn', languageCode: 'en', key: 'achievement_impactOn_en', value: 'Impact on'},
// {pageName: 'achievement', labelName: 'impactOn', languageCode: 'en', key: 'achievement_impactOn_ar', value: 'الأثر على'},
// {pageName: 'achievement', labelName: 'impactOn', languageCode: 'en', key: 'achievement_impactOn_en', value: 'Impact on'},
// {pageName: 'achievement', labelName: 'impactOn', languageCode: 'en', key: 'achievement_impactOn_ar', value: 'الأثر على'},
// {pageName: 'achievement', labelName: 'impactOn', languageCode: 'en', key: 'achievement_impactOn_en', value: 'Impact on'},
// {pageName: 'achievement', labelName: 'impactOn', languageCode: 'en', key: 'achievement_impactOn_ar', value: 'الأثر على'},
// ];


    