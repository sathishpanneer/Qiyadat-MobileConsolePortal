import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort, MatDialogRef, MatDialogConfig, MatSnackBar } from '@angular/material';
import { AppSettingService } from 'src/app/Service/app-setting.service';
import { AddAppSettingComponent } from './add-app-setting/add-app-setting.component';
import { DeleteAppSettingComponent } from './delete-app-setting/delete-app-setting.component';
import { EditAppSettingComponent } from './edit-app-setting/edit-app-setting.component';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';



export interface appSetting {
  key: string;
  value: string;
  description: string;
  type: number;
}

@Component({
  selector: 'app-app-setting',
  templateUrl: './app-setting.component.html',
  styleUrls: ['./app-setting.component.scss']
})

export class AppSettingComponent implements OnInit {

  displayedColumns = ['description', 'value', 'actions'];
  dataSource = new MatTableDataSource<appSetting>();
  progressCompleted: boolean = false;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(public dialog: MatDialog, private appSettingService: AppSettingService, private snackBar: MatSnackBar) { }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.GetAllAppSetting();
  }

  GetAllAppSetting() {
    this.appSettingService.getAllAppSetting().subscribe(data => {
      if (data) {
        this.dataSource.data = data.applicationSettings;
        this.progressCompleted = true;
      }
    });
  }
  AddAppSetting() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = <appSetting>{};

    const dialogRef = this.dialog.open(AddAppSettingComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res => {
      if (res == 1) {
        dialogConfig.data.type = Number(dialogConfig.data.type);
        this.appSettingService.createAppSetting(dialogConfig.data).subscribe(res => {
          if (res) {
            this.snackBar.open("App Setting added successfully !!", "Done", {
              duration: 2000,
              verticalPosition: 'top',
              panelClass: ['snack-bar']
            });
            this.GetAllAppSetting();
          } else {
            this.snackBar.open("Failed !!", "", {
              duration: 2000,
              verticalPosition: 'top',
              panelClass: ['snack-bar']
            });
          }
        })
      }
    });
  }

  EditAppSetting(row: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = row;

    const dialogRef = this.dialog.open(EditAppSettingComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res => {
      if (res == 1) {
        dialogConfig.data.type = Number(dialogConfig.data.type);
        this.appSettingService.updateAppSetting(dialogConfig.data).subscribe(res => {
          if (res) {
            this.snackBar.open("App Setting updated successfully !!", "Done", {
              duration: 3000,
              verticalPosition: 'top',
              panelClass: ['snack-bar']
            });

            this.GetAllAppSetting();
          } else {
            this.snackBar.open("Failed !!", '', {
              duration: 3000,
              verticalPosition: 'top',
              panelClass: ['snack-bar']
            });
          }
        });
      } else {
        this.GetAllAppSetting();
      }
    });
  }

  DeleteAppSetting(key: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = key;

    const dialogRef = this.dialog.open(DeleteAppSettingComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res => {
      if (res === 1) {
        this.appSettingService.deleteAppSetting(dialogConfig.data).subscribe(res => {
          if (res) {
            this.snackBar.open('App Setting deleted successfully !!', 'Done', {
              duration: 3000,
              verticalPosition: 'top',
              panelClass: ['snack-bar']
            });
            this.GetAllAppSetting();
          } else {
            this.snackBar.open("Failed !!", "", {
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

}



const ELEMENT_DATA: appSetting[] = [
  { key: 'BioVideoDuration', value: '180', type: 2, description: 'No of seconds to record bio video' },
  { key: 'contactUs', value: '97147771555', type: 5, description: 'Admin Contact Phone number' },
  { key: 'emailUs', value: 'info@uaeglp.gov.ae', type: 3, description: 'Admin email account' },
  { key: 'faceBook', value: '1674027609348782', type: 1, description: 'Facebook business account' },
  { key: 'instagram', value: 'UAE_GLP', type: 4, description: 'Instragram business account' },
  { key: 'locationSnapshot', value: '30', type: 1, description: 'User location detail will be syn for every 30 mins' },
  { key: 'LongOfflineCachingDuration', value: '172800', type: 1, description: 'No of seconds A, B, C  module data could be cached' },
  { key: 'lpsAttCount', value: '2', type: 1, description: 'No of attachment to upload the files' },
  { key: 'meetingLocationRadius', value: '1', type: 1, description: 'In Kilometers' },
  { key: 'NoOfComments', value: '3', type: 1, description: 'No of Comments to show in timeline' },
  { key: 'meetingLocationRadius', value: '1', type: 1, description: 'In Kilometers' },
  { key: 'NoOfComments', value: '3', type: 1, description: 'No of Comments to show in timeline' },
  { key: 'meetingLocationRadius', value: '1', type: 1, description: 'In Kilometers' },
  { key: 'NoOfComments', value: '3', type: 1, description: 'No of Comments to show in timeline' },
  { key: 'meetingLocationRadius', value: '1', type: 1, description: 'In Kilometers' },
  { key: 'NoOfComments', value: '3', type: 1, description: 'No of Comments to show in timeline' },
];